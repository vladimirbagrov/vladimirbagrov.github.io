function getDecimal(num)
{
    var str = "" + num; // 1
 var zeroPos = str.indexOf("."); // 2

 if (zeroPos == -1) return 0; // 3
 str = str.slice(zeroPos); // 4

 return +str; // 5
}
ucFirst(str)
{
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
