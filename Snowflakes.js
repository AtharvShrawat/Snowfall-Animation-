class Snowflakes  {
    constructor(x, y,w,h) {

        var options ={
            isStatic: false,
            density: 1,
        }
        this.w=w;
        this.h=h;
      
        this.body = Bodies.rectangle(x, y, this.w,this.h, options);       
        //this.color=color(random(0, 255), random(0, 255), random(0, 255));
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);
        pop(); 
    }
}