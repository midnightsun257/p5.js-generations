// noprotect
c = 0;
function setup() {
  createCanvas(600, 600);
  background(255);
  noStroke();
  rectMode(CENTER);
  pixelDensity(4);
  rect_dims = [50, 300];
  n_patches = 5;
  rect_locations_top = [];
  rect_locations_bottom = [];
  m = 5;
  colors2 = [
    [1, 19, 7],
    [0, 23, 54],
    [0, 72, 26],
    [21, 94, 137],
    [154, 234, 221],
  ];

  colors = [
    [1, 48, 38],
    [1, 71, 96],
    [16, 126, 87],
    [161, 206, 63],
    [203, 229, 142],
  ];

  for (i = 0; i < n_patches; i++) {
    rect_locations_top.push([
      [
        random((width / n_patches) * i - m, (width / n_patches) * i + m),
        random(
          (width / n_patches) * (i + 1) + m,
          (width / n_patches) * (i + 1) + 100
        ),
      ],
      [random(-m, m), random(height - m, height + m)],
    ]);
    rect_locations_bottom.push([
      [
        random((width / n_patches) * i - m, (width / n_patches) * i + m),
        random(
          (width / n_patches) * (i + 1) - m,
          (width / n_patches) * (i + 1) + m
        ),
      ],
      [
        random(height / 2 + 50, height / 2 + 100),
        random(height - m, height + m),
      ],
    ]);
  }
}

function draw() {
  for (j = 0; j < 500; j++) {


    for (k = 0; k < n_patches; k++) {
      draw_rect(
        colors[k % colors.length],
        rect_locations_top[k][0],
        rect_locations_top[k][1]
      );
      if (random() < 0.75) {
        draw_rect(
          colors2[k % colors.length],
          rect_locations_bottom[k][0],
          rect_locations_bottom[k][1]
        );
      }
    }
  }

  // noise on top
  w = 1;
  for (i = 0; i < height; i += w) {
    for (j = 0; j < width; j += w) {
      n = random();
      if (n > 0.6) {
        fill(255, 255, 255, 15);
      } else {
        fill(0, 0, 0, 15);
      }
      rect(i, j, w);
    }
  }

  noLoop();
}

function draw_rect(color, x, y) {
  r = random();
  if (r < 0.5) {
    blendMode(HARD_LIGHT);
  } else {
    blendMode(BLEND);
  }
  fill(color[0], color[1], color[2], random(0, 6));
  rect(
    random(x[0], x[1]),
    random(y[0], y[1]),
    random(rect_dims[0], rect_dims[1]),
    random(rect_dims[0], rect_dims[1])
  );
}
