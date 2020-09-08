class Rope{
    constructor(body1, body2, offsetX, offsetY) {                                 
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1
            bodyB:body2
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        //console.log(options);
        this.rope=constraint.create(options)
        world.add(world,this.rope)
    }
    rope1=new this.rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)

display()
{
    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;

    strokeWeight(1);

    var Anchor2X=pointA.x
    var Anchor2Y=pointB.x

    var Anchor2X=pointA.x+this.offsetX
    var Anchor2Y=pointB.x+this.offsetY

    line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);


}
}