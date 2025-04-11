 declare module 'three/examples/jsm/loaders/GLTFLoader' {
    import { Loader } from 'three';
    // import { Group, Scene } from 'three';
    export class GLTFLoader extends Loader {
      load(
        url: string,
        onLoad: (gltf: { scene: Scene }) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
    }
  }