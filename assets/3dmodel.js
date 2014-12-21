var _scene, _camera, _renderer;
var _objLoader;

/*************/
var init = function() {
  _scene = new THREE.Scene();
  _camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  
  _renderer = new THREE.WebGLRenderer();
  _renderer.setSize(512, 512);
  _renderer.setClearColor(0xaaaaaa, 0xff);
  document.body.appendChild(_renderer.domElement);
}

/*************/
var render = function(timestamp) {
  requestAnimationFrame(render);

  _renderer.clear();
}

init();
render();
