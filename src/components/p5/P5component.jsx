import React from 'react'
import { ReactP5Wrapper } from 'react-p5-wrapper';
import { Vector } from "p5";
import '../../fonts/Oxygen-Light.ttf';
import '../../fonts/Oxygen-Light.ttf';


function sketch(p5) {
  let sizepx = 600 // размер в пикселях
  let linesWeight = 2 // толщина линий

  let anchorPointsX = []
  let anchorPointsY = []
  let controlPointsX = [] // movers
  let controlPointsY = [] // movers
  let letters = []

  p5.setup = () => {
    if (p5.windowWidth <= 1920 && p5.windowWidth >= 600) {
      p5.createCanvas(sizepx, sizepx) // use sizepx to make custom size
      createPoints(p5.width, p5.height, 4)
    } else if (p5.windowWidth < 600 && p5.windowWidth > 450) {
      p5.createCanvas(450, 450) // use sizepx to make custom size
      createPoints(p5.width, p5.height, 4)
    }
    else if (p5.windowWidth < 450 && p5.windowWidth > 280) {
      p5.createCanvas(300, 300) // use sizepx to make custom size
      createPoints(p5.width, p5.height, 4)
    } else {
      p5.createCanvas(250, 250) // use sizepx to make custom size
      createPoints(p5.width, p5.height, 4)
    }

    letters.push('E', 'N', 'G', 'L', 'I', 'S', 'H', 'W', 'I', 'T', 'H', 'Y', 'A', 'N', 'A')
  }

  class Point {
    constructor(x, y) {
      this.xPoint = x;
      this.yPoint = y;
    }
  }

  class Mover {
    constructor(x, y, size) {
      this.xPoint = x;
      this.yPoint = y;
      this.pos = p5.createVector(x, y)
      this.vel = Vector.random2D()
      this.acc = p5.createVector(0, 0)
      this.scale = size
    }

    update() {
      // this.mouse = createVector(mouseX, mouseY)
      // this.acc = p5.Vector.sub(this.mouse, this.pos)
      this.acc.setMag(0.1)

      this.vel.add(this.acc)
      this.vel.limit(this.scale / 8000)
      this.pos.add(this.vel)
      //console.log(`Position:${this.pos}, Velocity: ${this.vel}`)
    }

    show() {
      p5.noStroke()
      p5.fill('#5842da')
      p5.ellipse(this.pos.x, this.pos.y, 20, 20)
    }
  }

  p5.draw = () => {
    p5.colorMode(p5.HSB)
    p5.background(255);

    p5.push()

    p5.textSize(p5.width / 8)
    p5.textFont('OxygenLight')
    p5.textAlign(p5.LEFT, p5.TOP)

    p5.stroke(0)
    p5.fill(0)

    p5.text(letters[0], (2 / 8 + 0.025) * p5.width, (2 / 8) * p5.height)
    p5.text(letters[1], (3 / 8 + 0.015625) * p5.width, (2 / 8) * p5.height)
    p5.text(letters[2], (4 / 8 + 0.015625) * p5.width, (2 / 8) * p5.height)

    p5.text(letters[3], (2 / 8 + 0.025) * p5.width, (3 / 8) * p5.height)
    p5.text(letters[4], (3 / 8 + 0.045) * p5.width, (3 / 8) * p5.height)
    p5.text(letters[5], (4 / 8 + 0.03) * p5.width, (3 / 8) * p5.height)
    p5.text(letters[6], (5 / 8 + 0.02) * p5.width, (3 / 8) * p5.height)

    p5.push()
    p5.textSize(p5.width / 9)
    p5.textFont('OxygenRegular')
    p5.text(letters[7], (2 / 8 + 0.010) * p5.width, (4 / 8 + 0.003) * p5.height) // w by the way
    p5.pop()
    p5.text(letters[8], (3 / 8 + 0.045) * p5.width, (4 / 8) * p5.height)
    p5.text(letters[9], (4 / 8 + 0.025) * p5.width, (4 / 8) * p5.height)
    p5.text(letters[10], (5 / 8 + 0.02) * p5.width, (4 / 8) * p5.height)

    p5.text(letters[11], (2 / 8 + 0.015) * p5.width, (5 / 8) * p5.height)
    p5.text(letters[12], (3 / 8 + 0.015) * p5.width, (5 / 8) * p5.height)
    p5.text(letters[13], (4 / 8 + 0.015625) * p5.width, (5 / 8) * p5.height)
    p5.text(letters[14], (5 / 8 + 0.015) * p5.width, (5 / 8) * p5.height)
    p5.pop()

    drawLines()
  
    for (let i = 0; i < controlPointsX.length; i++) {
      controlPointsX[i].update();
      controlPointsY[i].update();
      //console.log(...controlPointsX, ...controlPointsY)
    }
    //console.log(anchorPointsX, anchorPointsY, controlPointsX, controlPointsY, frameCount)
    curves(anchorPointsX, anchorPointsY, controlPointsX, controlPointsY, p5.frameCount, linesWeight)
    // p5.noLoop()
  }


  function createPoints(width, height, slices = 5) {
    for (let i = 1; i < slices; i++) {  // going with different x-es

      let upperPoint = new Point(2 / 8 * width + i / slices * width / 2, 2 / 8 * height)
      let bottomPoint = new Point(2 / 8 * width + i / slices * width / 2, 6 / 8 * height)

      //console.log(upperWay)
      anchorPointsX.push(upperPoint)
      anchorPointsX.push(bottomPoint)

    }

    for (let i = 1; i < slices; i++) {  // going with different x-es

      let leftPoint = new Point(2 / 8 * width, 2 / 8 * height + i / slices * height / 2)
      let rightPoint = new Point(6 / 8 * width, 2 / 8 * height + i / slices * height / 2)

      //console.log(upperWay)
      anchorPointsY.push(leftPoint)
      anchorPointsY.push(rightPoint)

    }

    for (let i = 0; i < anchorPointsX.length; i += 2) {
      let start = p5.createVector(anchorPointsX[i].xPoint, anchorPointsX[i].yPoint)
      let end = p5.createVector(anchorPointsX[i + 1].xPoint, anchorPointsX[i + 1].yPoint)
      let bufX = end.sub(start)
      bufX.div(5)
      start.add(bufX)


      let firstControl = new Mover(start.x, start.y, sizepx)
      p5.push()
      p5.strokeWeight(5)
      p5.point(start.x, start.y)
      p5.pop()
      controlPointsX.push(firstControl)

      start.add(bufX.mult(3))
      let secondControl = new Mover(start.x, start.y, sizepx)
      p5.push()
      p5.strokeWeight(5)
      p5.point(start.x, start.y)
      p5.pop()
      controlPointsX.push(secondControl)
    }

    for (let i = 0; i < anchorPointsY.length; i += 2) {
      let start = p5.createVector(anchorPointsY[i].xPoint, anchorPointsY[i].yPoint)
      let end = p5.createVector(anchorPointsY[i + 1].xPoint, anchorPointsY[i + 1].yPoint)
      let bufY = end.sub(start)
      bufY.div(5)
      start.add(bufY)


      let firstControl = new Mover(start.x, start.y, sizepx)
      p5.push()
      p5.strokeWeight(5)
      p5.point(start.x, start.y)
      p5.pop()
      controlPointsY.push(firstControl)

      start.add(bufY.mult(3))
      let secondControl = new Mover(start.y, start.x, sizepx)
      p5.push()
      p5.strokeWeight(5)
      p5.point(start.x, start.y)
      p5.pop()
      controlPointsY.push(secondControl)
    }
  }

  function drawLines() {

    p5.line(2 / 8 * p5.width, 2 / 8 * p5.height, 2 / 8 * p5.width, 6 / 8 * p5.height)
    p5.line(2 / 8 * p5.width, 2 / 8 * p5.height, 6 / 8 * p5.width, 2 / 8 * p5.height)
    p5.line(6 / 8 * p5.width, 2 / 8 * p5.height, 6 / 8 * p5.width, 6 / 8 * p5.height)
    p5.line(2 / 8 * p5.width, 6 / 8 * p5.height, 6 / 8 * p5.width, 6 / 8 * p5.height)
  }

  function curves(apx = [], apy = [], cpx = [], cpy = [], frameCount, linesWeight) {
    p5.colorMode(p5.HSB)
    let lengthX = apx.length
    p5.strokeWeight(linesWeight)

    p5.noFill()
    for (let i = 0; i < lengthX; i += 2) {
      p5.push()
      p5.stroke(frameCount / 10, 50, p5.map(frameCount, 0, 500, 0, 30))
      p5.bezier(apx[i].xPoint, apx[i].yPoint, cpx[i].pos.x, cpx[i].pos.y, cpx[i + 1].pos.x, cpx[i + 1].pos.y, apx[i + 1].xPoint, apx[i + 1].yPoint)
      p5.pop()
    }

    let lengthY = apy.length;

    for (let i = 0; i < lengthY; i += 2) {
      p5.push()
      p5.stroke(frameCount / 10, 50, p5.map(frameCount, 0, 500, 0, 30))
      p5.bezier(apy[i].xPoint, apy[i].yPoint, cpy[i].pos.x, cpy[i].pos.y, cpy[i + 1].pos.y, cpy[i + 1].pos.x, apy[i + 1].xPoint, apy[i + 1].yPoint)
      p5.pop()
    }

  }
}

export function P5component() {
  return <ReactP5Wrapper sketch={sketch} />
}
