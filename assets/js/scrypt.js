function change(object, ev)
{
   if(ev == "over")
     object.src = object.src.replace(/image1(..+)$/, 'image1_2$1');
   else
     object.src = object.src.replace(/image1_2(..+)$/, 'image1$1');
}
/*SI L IMAGE EST OVER ALORS ON MONTRE IMAGE 1 SINON IMAGE 2*/
