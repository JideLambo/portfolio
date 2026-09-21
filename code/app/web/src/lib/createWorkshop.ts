import {
  AmbientLight,
  BoxGeometry,
  CanvasTexture,
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
  githubLine?: string
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
const screenInk = '#e8e8ea'
const screenReady = '#3ddc6a'

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

const createScreenTexture = (githubLine?: string): CanvasTexture => {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 320
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    return new CanvasTexture(canvas)
  }
  ctx.fillStyle = '#141814'
  ctx.fillRect(0, 0, 512, 320)
  ctx.fillStyle = screenReady
  ctx.beginPath()
  ctx.arc(46, 78, 11, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = screenReady
  ctx.font = '600 40px "Geist Sans", ui-sans-serif, system-ui, sans-serif'
  ctx.fillText('Ready', 70, 92)
  if (githubLine) {
    ctx.fillStyle = screenInk
    ctx.font = '500 26px "Geist Sans", ui-sans-serif, system-ui, sans-serif'
    githubLine.split('\n').forEach((line, index) => {
      ctx.fillText(line, 36, 158 + index * 38)
    })
  }
  const texture = new CanvasTexture(canvas)
  texture.colorSpace = SRGBColorSpace
  texture.needsUpdate = true
  return texture
}

const buildDesk = (githubLine?: string) => {
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
  tag(board, 'uselay')
  root.add(board)
  hotspots.push(board)
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
  const lid = box(0.78, 0.48, 0.03, metal)
  lid.position.set(0, 0.28, -0.24)
  lid.rotation.x = -0.18
  const screen = new Mesh(
    new PlaneGeometry(0.68, 0.4),
    new MeshStandardMaterial({
      emissive: new Color(0x0a120a),
      emissiveIntensity: 0.45,
      map: createScreenTexture(githubLine),
      metalness: 0.05,
      roughness: 0.28,
    }),
  )
  screen.position.set(0, 0.29, -0.222)
  screen.rotation.x = -0.18
  laptop.add(base, lid, screen)
  tag(laptop, 'local-ai')
  root.add(laptop)
  laptop.traverse(child => {
    if (child instanceof Mesh) {
      hotspots.push(child)
    }
  })

  const phone = box(0.16, 0.02, 0.3, charcoal)
  phone.position.set(0.52, 0.06, 0.28)
  phone.rotation.y = 0.18
  tag(phone, 'imessage')
  root.add(phone)
  hotspots.push(phone)

  const mini = box(0.42, 0.16, 0.32, sage)
  mini.position.set(1.22, 0.12, 0.22)
  const glow = box(0.18, 0.03, 0.04, 0xf0c070, {
    emissive: new Color(0xf0c070),
    emissiveIntensity: 0.8,
    roughness: 0.4,
  })
  glow.position.set(1.08, 0.12, 0.38)
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
  lamp.add(lampBase, arm, head)
  tag(lamp, 'lamp')
  root.add(lamp)
  lamp.traverse(child => {
    if (child instanceof Mesh) {
      hotspots.push(child)
    }
  })

  const shade = cyl(0.05, 0.12, 0.18, plant)
  shade.position.set(-1.18, 0.28, 0.42)
  const pot = cyl(0.09, 0.1, 0.12, sageDark)
  pot.position.set(-1.18, 0.12, 0.42)
  root.add(shade, pot)

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
  const { canvas, githubLine, onHover, onLamp, onSelect } = options
  const scene = new Scene()
  scene.background = new Color(0x0d0d0f)

  const camera = new PerspectiveCamera(32, 1, 0.1, 40)
  const startPosition = new Vector3(0.15, 2.35, 4.15)
  camera.position.copy(startPosition)

  const { hotspots, root } = buildDesk(githubLine)
  scene.add(root)

  const hemi = new HemisphereLight(0xfff1dc, 0x1a1a1c, 0.55)
  scene.add(hemi)
  const key = new DirectionalLight(0xffe1b0, 1.15)
  key.position.set(1.4, 3.2, 1.8)
  key.castShadow = true
  key.shadow.mapSize.set(1024, 1024)
  scene.add(key)
  const lampLight = new PointLight(
    0xffc078,
    options.lampOn ? 1.6 : 0.55,
    5,
    1.6,
  )
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
  let lampOn = Boolean(options.lampOn)
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
      if (material instanceof MeshStandardMaterial) {
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
      lampLight.intensity = lampOn ? 1.6 : 0.55
    },
  }

  return api
}
