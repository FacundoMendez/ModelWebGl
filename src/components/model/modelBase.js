import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import BaseModel from "./src/models/Base.glb"


const modelBase= () =>{

        const scene = new THREE.Scene()

        const canvas = document.querySelector(".modelWebGl")


        /*------- config ------- */


            /* sizes */

        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        window.addEventListener("resize", () =>{
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })


            /* render */

        const renderer =new THREE.WebGLRenderer({
            canvas: canvas, 
            antialias:true,
            alpha:true
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.physicallyCorrectLights = true




        /* ------------------------------------------------- */

        

            /* lights */
       
            const ambientLight = new THREE.AmbientLight(0xff00ff, .4)
            scene.add(ambientLight)
        
            const pointLight = new THREE.PointLight(0xffffff,7)
            pointLight.position.set(4 , 0, 2)
            scene.add(pointLight)

            const pointLight2 = new THREE.PointLight(0xFFDAAA, 10)
            pointLight2.position.set(-2 , 0, 1)
            scene.add(pointLight2)

            const pointLight3 = new THREE.PointLight(0xFFDAAA, 10)
            pointLight3.position.set(0 , 2, 0)
            scene.add(pointLight3)

          

            /* camera */
            
        const camera =new THREE.PerspectiveCamera(57, sizes.width / sizes.height, .1, 100)
            camera.position.z= 4.6
        scene.add(camera)



        let baseMesh


        const gltfLoader = new GLTFLoader()
        gltfLoader.load(BaseModel,
            (gltf) =>
            {
                baseMesh= gltf.scene
                baseMesh.position.set(0,-1.5, 0)

                scene.add(baseMesh)
            }
        )



            // Controls

        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true
       /*  controls.enableZoom = false  */
        controls.enablePan= false
        controls.minDistance = .5
        controls.maxDistance = 10

        controls.minPolarAngle = 1.7;
        controls.maxPolarAngle = 1.7;


            
            /* animate  */

        
        const animate = ()=>{


            controls.update() 
            renderer.render(scene,camera)
            window.requestAnimationFrame(animate)

        }
        animate()




        /* OPTIMIZACION */
        
        gltfLoader.verticesNeedUpdate = true; 
        gltfLoader.elementsNeedUpdate = true; 
        gltfLoader.morphTargetsNeedUpdate = true; 
        gltfLoader.uvsNeedUpdate = true;
        gltfLoader.normalsNeedUpdate = true; 
        gltfLoader.colorsNeedUpdate = true; 

        gltfLoader.needsUpdate = true

    }



export default modelBase;