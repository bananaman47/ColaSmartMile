function testvar(){
  var t="hello from external js function";
  return t;
}

function getScriptTest(){
  var c="hello from within the script tags!";
  return c;
}

class TestVarClass {
  constructor(){
  }
  getTest(){
    var c="hello from external js class";
    return c;
  }

}
