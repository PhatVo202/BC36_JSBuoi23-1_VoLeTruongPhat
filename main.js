// Bai1:
// Input: cho 3 so a, b, c;
// Process:
// 1.Nhap vao a,b,c
// 2.th1: neu a<b va c < a
// 3.Th2: neu a<b va c < a va c > b
// 4.Th3: neu a<b va c<a va c<b
// 5.Th4: neu a>b va c<b
// 6.Th5: neu a>b va c>b c<a
// 7.Th6: neu a>v va c>b va c>a
// 8. Xuat ra ket qua

// Output: Xuat 3 so theo thu tu tang dan
var a = 5,
  b = 20,
  c = 0;
if (a < b) {
  if (c < a) {
    result = "c,a,b";
  } else if (c > b) {
    result = "a,b,c";
  } else {
    result = "a,c,b";
  }
} else {
  if (c < b) {
    result = "c,b,a";
  } else if (c < a) {
    result = "b,c,a";
  } else {
    result = "b,a,c";
  }
}

console.log("Thu tu day so tang dan: " + result);

//Bai2:
//  Input: cho nguoi su dung
// Process:
// 1.Nhap vao nguoi su dung(father, mother, brother,baby)
// 2. Xuat ra cau chao hoi tuong ung voi tung nguoi
// Output: Xuat ra cau chao nguoi su dung(thanh vien gia dinh)
var father = "Bố";
var mother = "Mẹ";
var brother = "Anh";
var baby = "Em gái";
var result = mother;

if (result === father) {
  console.log("Con chào", father);
} else if (result === mother) {
  console.log("Con chào", mother);
} else if (result === brother) {
  console.log("Em chào", brother);
} else if (result === baby) {
  console.log("Anh chào", baby);
}

// Bai3:
// Input: cho 3 so n1, n2,n3
// Process:
// 1.Nhap vao 3 so n1,n2,n3
// 2.Kiem tra so chan hay le, so chan chia het cho 2,nguoc lai so le
// 3.tao ra bien dem, sau khi xac dinh so chan thi tang bien dem len 1
// 4.Xac dinh so le thi lay 3 - bien dem so chan
// 5.Xuat ra Kq so chan, so le
// Output: Xuat ra bao nhieu so chan bao nhieu so le
var n1 = 1,
  n2 = 3,
  n3 = 3;
var countEvenumber = 0;
var countOdd = 0;
if (n1 % 2 == 0) {
  countEvenumber += 1;
  countOdd = 3 - countEvenumber;
}
if (n2 % 2 == 0) {
  countEvenumber += 1;
  countOdd = 3 - countEvenumber;
}
if (n3 % 2 == 0) {
  countEvenumber += 1;
  countOdd = 3 - countEvenumber;
} else {
  countEvenumber = 0;
  countOdd = 3 - countEvenumber;
}

console.log(" Co " + countEvenumber + " so chan" + ", " + countOdd + " so le");

// Bai4:
/**
 * Input: 3 canh tam giac a,b,c;
 * Process: 
 * 1.Nhap vao 3 canh tam giac a=, b=,c=
2.Neu 3 canh deu bang nhau thi tam giac deu
3.Neu 1 trong 2 canh bang nhau tam giac can
4. Neu c binh phuong = a binh phuong + b binh phuong thi tam giac vuong 
*/

var a = 3,
  b = 4,
  c = 5;
if (a + b > c && a + c > b && b + c > a) {
  if (a === b && a === c && b === c) {
    resultTriangle = "Tam giac deu";
  } else if (a === b || b === c || a === c) {
    resultTriangle = "Tam giac can ";
  } else resultTriangle = "tam giac vuong";
} else {
  resultTriangle = "Khong thoa man dieu kien cua 1 tam giac";
}
console.log(resultTriangle);
