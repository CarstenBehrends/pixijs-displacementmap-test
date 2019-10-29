import { log } from "../utils/dev/log";
const _log = log(true, "pixi Dmap");

import * as PIXI from "pixi.js";
import { TweenMax } from "gsap";

const app = new PIXI.Application({
  // transparent: true
});
let layer1;
let layer2;
export function init(el) {
  _log(el);
  el.append(app.view);
  layer1 = PIXI.Sprite.from("img/emotion-default-background.jpg");
  // layer1 = PIXI.Sprite.from("img/walter_spatzek.png");
  // layer1 = PIXI.Sprite.from("img/intro-background.jpg");
  layer1.anchor.set(0.5);
  layer1.anchor.set(0.5);
  app.stage.addChild(layer1);

  layer2 = PIXI.Sprite.from("img/emotion-default-background-displacement.jpg");
  // layer2 = PIXI.Sprite.from("img/walter_spatzek_disp.jpg");
  // layer2 = PIXI.Sprite.from("img/intro-background_disp.jpg");
  layer2.anchor.set(0.5);
  app.stage.addChild(layer2);

  const displacementFilter = new PIXI.filters.DisplacementFilter(layer2);
  layer1.filters = [displacementFilter];
  // Listen for window resize events
  window.addEventListener("resize", resize);
  resize();
  // displacementFilter.scale.x = 10;
  displacementFilter.scale.y = 10;
  TweenMax.to(displacementFilter.scale, 1, {
    x: -10,
    y: -5,
    yoyo: true,
    repeat: -1
  });
  //   app.ticker.add(delta => {
  //     // just for fun, let's rotate mr rabbit a little
  //     // delta is 1 if running at 100% performance
  //     // creates frame-independent transformation
  //     // layer1.rotation += 0.1 * delta;
  //   });
}

function resize() {
  // Get the parent node
  const parent = app.view.parentNode;
  // Resize the renderer
  app.renderer.resize(parent.clientWidth, parent.clientHeight);

  scaleToFit(layer1);
  scaleToFit(layer2);
}

function scaleToFit(sprite) {
  sprite.height = app.screen.height;
  sprite.width =
    (app.screen.height * sprite.texture.width) / sprite.texture.height;
  sprite.x = app.screen.width / 2;
  sprite.y = app.screen.height / 2;
}
