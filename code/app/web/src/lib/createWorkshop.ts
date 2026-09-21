import {
  AmbientLight,
  BoxGeometry,
  Color,
  CylinderGeometry,
  DirectionalLight,
  Group,
  HemisphereLight,
  type Material,
  Mesh,
  MeshStandardMaterial,
  type Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  Raycaster,
  Scene,
  SRGBColorSpace,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import {
  isWorkshopCardHotspot,
  type WorkshopCardId,
  type WorkshopHotspot,
  workshopHotspots,
} from '@/lib/workshop'
import {
  canOrbitWorkshop,
  type WorkshopHoverId,
  type WorkshopSceneApi,
} from '@/lib/workshop-webgl'

type CreateWorkshopOptions = {
  canvas: HTMLCanvasElement
  lampOn?: boolean
  motion?: boolean
  onHover: (id: WorkshopHoverId) => void
  onLamp: () => void
  onSelect: (id: WorkshopCardId) => void
}

type HotspotMesh = Mesh

const wood = 0xc4a06a
const woodDark = 0x8a6240
const cork = 0x8d6b45
const sage = 0x6e7d5c
const sageDark = 0x44553c
const cream = 0xe8dcc8
const charcoal = 0x2a2a2c
const metal = 0x3a3a3c
const paper = 0xefe6d6
const plant = 0x5c7354

const mat = (
  color: number,
  extras?: ConstructorParameters<typeof MeshStandardMaterial>[0],
) =>
  new MeshStandardMaterial({
    color,
    metalness: 0.08,
    roughness: 0.62,
    ...extras,
  })

const box = (
  w: number,
  h: number,
  d: number,
  color: number,
  extras?: ConstructorParameters<typeof MeshStandardMaterial>[0],
) => {
  const mesh = new Mesh(new BoxGeometry(w, h, d), mat(color, extras))
  mesh.castShadow = true
  mesh.receiveShadow = true
  return mesh
}

const cyl = (
  rTop: number,
  rBot: number,
  h: number,
  color: number,
  extras?: ConstructorParameters<typeof MeshStandardMaterial>[0],
) => {
  const mesh = new Mesh(
    new CylinderGeometry(rTop, rBot, h, 8),
    mat(color, extras),
  )
  mesh.castShadow = true
  mesh.receiveShadow = true
  return mesh
}

const tag = (mesh: Object3D, id: WorkshopHotspot['id']) => {
  mesh.traverse(child => {
    child.userData.workshopId = id
  })
  return mesh
}

const buildDesk = () => {
  const root = new Group()
  const hotspots: HotspotMesh[] = []

  const desk = box(3.8, 0.08, 1.85, wood)
  desk.position.y = 0
  root.add(desk)

  const apron = box(3.72, 0.16, 1.78, woodDark)
  apron.position.y = -0.12
  root.add(apron)

  const matte = box(2.35, 0.012, 1.12, charcoal)
  matte.position.set(0.12, 0.046, 0.08)
  root.add(matte)

  const board = box(0.92, 0.88, 0.05, cork)
  board.position.set(-1.52, 0.62, -0.58)
  const frame = box(1.02, 0.98, 0.04, charcoal)
  frame.position.set(-1.52, 0.62, -0.6)
  tag(board, 'uselay')
  tag(frame, 'uselay')
  root.add(frame, board)
  hotspots.push(board, frame)
  const pins: Array<[number, number, number]> = [
    [-1.72, 0.82, -0.54],
    [-1.48, 0.9, -0.54],
    [-1.36, 0.68, -0.54],
    [-1.62, 0.52, -0.54],
  ]
  const pinColors = [sage, cream, sageDark, cream]
  pins.forEach((pos, index) => {
    const chip = box(0.16, 0.16, 0.03, pinColors[index] ?? sage)
    chip.position.set(...pos)
    chip.rotation.z = index % 2 === 0 ? 0.12 : -0.18
    tag(chip, 'uselay')
    root.add(chip)
  })

  const laptop = new Group()
  laptop.position.set(-0.18, 0.07, 0.02)
  const base = box(0.78, 0.04, 0.52, metal)
  base.position.y = 0.02
  const keys = box(0.68, 0.008, 0.4, charcoal)
  keys.position.set(0, 0.044, 0.02)
  const lid = box(0.78, 0.48, 0.03, metal)
  lid.position.set(0, 0.28, -0.24)
  lid.rotation.x = -0.18
  const screenMat = new MeshStandardMaterial({
    color: 0x141814,
    emissive: new Color(0x101810),
    emissiveIntensity: 0.45,
    metalness: 0.05,
    roughness: 0.28,
  })
  screenMat.userData.lockEmissive = true
  const screen = new Mesh(new PlaneGeometry(0.68, 0.4), screenMat)
  screen.position.set(0, 0.29, -0.222)
  screen.rotation.x = -0.18
  laptop.add(base, keys, lid, screen)
  tag(laptop, 'local-ai')
  root.add(laptop)
  laptop.traverse(child => {
    if (child instanceof Mesh) {
      hotspots.push(child)
    }
  })

  const phone = new Group()
  phone.position.set(0.52, 0.058, 0.28)
  phone.rotation.y = 0.22
  const phoneBody = box(0.18, 0.018, 0.34, 0xd0d0d4, { roughness: 0.28 })
  const phoneGlass = box(0.15, 0.006, 0.3, 0x1c1c20, {
    emissive: new Color(0x2a2a32),
    emissiveIntensity: 0.18,
    roughness: 0.22,
  })
  phoneGlass.position.y = 0.012
  if (phoneGlass.material instanceof MeshStandardMaterial) {
    phoneGlass.material.userData.lockEmissive = true
  }
  phone.add(phoneBody, phoneGlass)
  tag(phone, 'imessage')
  root.add(phone)
  phone.traverse(child => {
    if (child instanceof Mesh) {
      hotspots.push(child)
    }
  })

  const mini = box(0.46, 0.18, 0.34, sage)
  mini.position.set(1.22, 0.13, 0.22)
  const glow = box(0.2, 0.03, 0.04, 0xf0c070, {
    emissive: new Color(0xf0c070),
    emissiveIntensity: 0.95,
    roughness: 0.4,
  })
  glow.position.set(1.08, 0.13, 0.4)
  if (glow.material instanceof MeshStandardMaterial) {
    glow.material.userData.lockEmissive = true
  }
  tag(mini, 'firstdistro')
  tag(glow, 'firstdistro')
  root.add(mini, glow)
  hotspots.push(mini, glow)

  const lamp = new Group()
  lamp.position.set(0.62, 0.04, -0.38)
  const lampBase = cyl(0.12, 0.14, 0.04, metal)
  lampBase.position.y = 0.02
  const arm = box(0.05, 0.72, 0.05, metal)
  arm.position.set(0.02, 0.42, 0)
  arm.rotation.z = 0.35
  const head = box(0.28, 0.08, 0.18, metal)
  head.position.set(0.22, 0.78, 0.02)
  head.rotation.z = 0.45
  const shade = cyl(0.02, 0.14, 0.12, 0x2f2f32, { roughness: 0.45 })
  shade.position.set(0.18, 0.72, 0.02)
  shade.rotation.z = 0.9
  lamp.add(lampBase, arm, head, shade)
  tag(lamp, 'lamp')
  root.add(lamp)
  lamp.traverse(child => {
    if (child instanceof Mesh) {
      hotspots.push(child)
    }
  })

  const plantShade = cyl(0.05, 0.12, 0.18, plant)
  plantShade.position.set(-1.18, 0.28, 0.42)
  const pot = cyl(0.09, 0.1, 0.12, sageDark)
  pot.position.set(-1.18, 0.12, 0.42)
  root.add(plantShade, pot)

  const mug = cyl(0.08, 0.09, 0.14, charcoal)
  mug.position.set(-0.92, 0.13, 0.22)
  root.add(mug)

  const cup = cyl(0.07, 0.08, 0.12, cream)
  cup.position.set(-1.42, 0.12, 0.18)
  root.add(cup)

  const sketch = box(0.62, 0.01, 0.48, paper)
  sketch.position.set(-0.08, 0.055, 0.58)
  sketch.rotation.y = -0.12
  root.add(sketch)

  const crystal = new Mesh(new BoxGeometry(0.1, 0.08, 0.1), mat(sageDark))
  crystal.position.set(0.92, 0.1, 0.55)
  crystal.rotation.set(0.2, 0.4, 0.1)
  root.add(crystal)

  const notebook = box(0.38, 0.03, 0.48, paper)
  notebook.position.set(1.18, 0.06, 0.58)
  root.add(notebook)

  const shelf = box(0.7, 0.04, 0.28, woodDark)
  shelf.position.set(1.62, 0.72, -0.7)
  root.add(shelf)
  const potA = cyl(0.07, 0.08, 0.16, sage)
  potA.position.set(1.48, 0.84, -0.7)
  const potB = cyl(0.06, 0.07, 0.12, plant)
  potB.position.set(1.72, 0.82, -0.68)
  root.add(potA, potB)

  return { hotspots, root }
}

export const createWorkshop = (
  options: CreateWorkshopOptions,
): WorkshopSceneApi => {
  const { canvas, onHover, onLamp, onSelect } = options
  const scene = new Scene()
  scene.background = new Color(0x0d0d0f)

  const camera = new PerspectiveCamera(32, 1, 0.1, 40)
  const startPosition = new Vector3(0.15, 2.35, 4.15)
  camera.position.copy(startPosition)

  const { hotspots, root } = buildDesk()
  scene.add(root)
  const floor = new Mesh(
    new PlaneGeometry(14, 14),
    new MeshStandardMaterial({
      color: 0x0d0d0f,
      metalness: 0,
      roughness: 1,
    }),
  )
  floor.rotation.x = -Math.PI / 2
  floor.position.y = -0.95
  floor.receiveShadow = true
  scene.add(floor)

  const hemi = new HemisphereLight(0xfff1dc, 0x1a1a1c, 0.55)
  scene.add(hemi)
  const key = new DirectionalLight(0xffe1b0, 1.15)
  key.position.set(1.4, 3.2, 1.8)
  key.castShadow = true
  key.shadow.mapSize.set(1024, 1024)
  scene.add(key)
  const lampLight = new PointLight(0xffc078, 1.7, 5, 1.6)
  lampLight.position.set(0.82, 0.92, -0.28)
  scene.add(lampLight)
  const fill = new AmbientLight(0xffffff, 0.18)
  scene.add(fill)

  const renderer = new WebGLRenderer({
    alpha: false,
    antialias: true,
    canvas,
  })
  renderer.outputColorSpace = SRGBColorSpace
  renderer.shadowMap.enabled = true
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.enablePan = false
  controls.autoRotate = options.motion !== false
  controls.autoRotateSpeed = 0.35
  controls.minDistance = 2.6
  controls.maxDistance = 6.2
  controls.minPolarAngle = 0.72
  controls.maxPolarAngle = 1.22
  controls.target.set(0, 0.28, 0)
  controls.enableRotate = canOrbitWorkshop()
  controls.saveState()

  const raycaster = new Raycaster()
  const pointer = new Vector2()
  let hovered: WorkshopHoverId = null
  let lampOn = options.lampOn !== false
  lampLight.intensity = lampOn ? 1.7 : 0.08
  key.intensity = lampOn ? 1.15 : 0.28
  hemi.intensity = lampOn ? 0.55 : 0.18
  let frame = 0
  let disposed = false

  const sizeToParent = () => {
    const parent = canvas.parentElement
    if (!parent) {
      return
    }
    const width = parent.clientWidth
    const height = parent.clientHeight
    if (width < 2 || height < 2) {
      return
    }
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
  }

  const setHover = (id: WorkshopHoverId) => {
    if (hovered === id) {
      return
    }
    hovered = id
    for (const mesh of hotspots) {
      const material = mesh.material
      if (
        material instanceof MeshStandardMaterial &&
        !material.map &&
        !material.userData.lockEmissive
      ) {
        material.emissive = new Color(
          mesh.userData.workshopId === id ? 0x3a3a32 : 0x000000,
        )
        material.emissiveIntensity = mesh.userData.workshopId === id ? 0.22 : 0
      }
    }
    onHover(id)
  }

  const pick = (clientX: number, clientY: number): WorkshopHoverId => {
    const rect = canvas.getBoundingClientRect()
    pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1
    pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1
    raycaster.setFromCamera(pointer, camera)
    const hit = raycaster.intersectObjects(hotspots, false)[0]
    const id = hit?.object.userData.workshopId
    return typeof id === 'string' ? (id as WorkshopHotspot['id']) : null
  }

  const onPointerMove = (event: PointerEvent) => {
    setHover(pick(event.clientX, event.clientY))
  }

  const onPointerLeave = () => {
    setHover(null)
  }

  const onPointerUp = (event: PointerEvent) => {
    const id = pick(event.clientX, event.clientY)
    if (!id) {
      return
    }
    const hotspot = workshopHotspots.find(item => item.id === id)
    if (!hotspot) {
      return
    }
    if (hotspot.kind === 'lamp') {
      onLamp()
      return
    }
    if (isWorkshopCardHotspot(hotspot)) {
      onSelect(hotspot.id)
    }
  }

  const tick = () => {
    if (disposed) {
      return
    }
    frame = window.requestAnimationFrame(tick)
    controls.update()
    renderer.render(scene, camera)
  }

  const observer = new ResizeObserver(sizeToParent)
  if (canvas.parentElement) {
    observer.observe(canvas.parentElement)
  }
  sizeToParent()
  canvas.addEventListener('pointermove', onPointerMove)
  canvas.addEventListener('pointerleave', onPointerLeave)
  canvas.addEventListener('pointerup', onPointerUp)
  tick()

  const api: WorkshopSceneApi = {
    dismiss: () => {
      setHover(null)
    },
    dispose: () => {
      disposed = true
      window.cancelAnimationFrame(frame)
      observer.disconnect()
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerleave', onPointerLeave)
      canvas.removeEventListener('pointerup', onPointerUp)
      controls.dispose()
      renderer.dispose()
      scene.traverse(object => {
        if (object instanceof Mesh) {
          object.geometry.dispose()
          const material = object.material
          const materials: Material[] = Array.isArray(material)
            ? material
            : [material]
          for (const item of materials) {
            if (item instanceof MeshStandardMaterial && item.map) {
              item.map.dispose()
            }
            item.dispose()
          }
        }
      })
    },
    hover: id => {
      setHover(id)
    },
    motion: enabled => {
      controls.autoRotate = enabled && canOrbitWorkshop()
    },
    reset: () => {
      controls.reset()
    },
    select: id => {
      setHover(id)
    },
    toggleLamp: on => {
      lampOn = on ?? !lampOn
      lampLight.intensity = lampOn ? 1.7 : 0.08
      key.intensity = lampOn ? 1.15 : 0.28
      hemi.intensity = lampOn ? 0.55 : 0.18
    },
  }

  return api
}
