var s1;

function setup() {
  createCanvas(400,400);
  s1 = new Student("Subham",13,7);
 
}

function draw() 
{
  background(30);
  
  s1.display();
  
}