
const students = [
    {
        id:1,
        name:"ahmet" ,
        surname:"yılmaz",
        age:20,
        department:"frontend",
    },

    {
        id:2,
        name:"ayşe",
        surname:"demir",
        age:22,
        department:"frontend",
    },
    
    {
        id:3,
        name:"mehmet",
        surname:"çelik",
        age:19,
        department:"frontend",
    },
    {
        id:4,
        name:"zeynep",
        surname:"koç",
        age:21,
        department:"Full Stack",
    },
    {
        id:5,
        name:"emir",
        surname:"arslan",
        age:23,
        department:"Full Stack",
    },
    
    
];
function showmenu(){
    const choice = prompt("yapmak istediğiniz işlemi seçiniz \n 1-öğrenci ekle \n 2-öğrencileri listele \n 3-öğrenci sil \n 4-uygulamadan çık ");
    if (choice === null) {
    return;
    } else if(choice==="1") {
        addstudent();
        
    }else if(choice==="2"){
        listStudents();
        
    }else if(choice==="3"){
        deletestudent();
        
    }else if(choice==="4"){
        exitapp();
        return;
        
        
    }else{
        alert("lütfen geçerli bir giriş yapınız")
        
    }
    return showmenu()
}
    

    
function addstudent(){
   
    const name =prompt("öğrencinin adını giriniz");
    const onlyLetters = /^[a-zA-ZçğıöşüÇĞİÖŞÜ ]+$/;
    if(name===null){
        return;
    }
    if (onlyLetters.test(name)) {
    alert("Öğrenci adında sayı kullanılamaz");
    return;
}
    const surname =prompt("öğrencinin soyadını giriniz")
    
    if(surname===null){
        return;
    }
    if (onlyLetters.test(surname)) {
    alert("Öğrenci soyadında sayı kullanılamaz");
    return ;
}
    const age =prompt("öğrencinin yaşını giriniz")

    if (age === null) {
    return;
    }
    
    const numeriage=Number(age);
    
    if(!Number.isInteger(numeriage)||numeriage<1||numeriage>100 ){
        alert("Geçerli bir yaş giriniz");
        return;
    }

    const department=prompt("öğrencinin eğitim gördüğü bölümü görünüz")
    if(department===null){
        return;
    }
    
    if (onlyLetters.test(department)) {
    alert("Öğrenci bülümünde sayı kullanılamaz");
    return;
}

    if(name.trim()=== "" || surname.trim()=== "" || age.trim()=== "" ||department.trim()===""){
        alert("öğrenci bilgileri boş bırakılamaz")
        return;
        
        
        
    }else{
        const fullinfo = "Ad: " + name + "\nSoyad: " + surname +"\nYaş: " + age + "\nBölüm: " + department;
        
        const student={
            id: students[students.length - 1]?.id ? students[students.length - 1].id + 1 : 1,
            name:name.trim(),
            surname:surname.trim(),
            age:numeriage,
            department:department.trim(),
            
        }
        students.push(student);
        console.log(students);

        alert("öğrenci başarıyla eklendi \n" + fullinfo);
        
 
        
    };
    
}


function listStudents(){
    
if(students.length===0){
    alert("kayıtlı öğrenci bulunamadı")
    return;
}
    const result = students.map(student =>
    `${student.id} - ${student.name} ${student.surname} | ${student.age} yaş | ${student.department}`
).join("\n");

alert(result);
    
}

function deletestudent(){
       if (students.length === 0) {
    alert("Kayıtlı öğrenci bulunamadı");
    return;
}
    const studentlist = students.map(student =>
    student.id + " - " + student.name + " " + student.surname
).join("\n");
const id = prompt(
    "Kayıtlı öğrenciler:\n" +
    studentlist +
    "\n\nSilmek istediğiniz öğrencinin ID numarasını giriniz:"
);
 
    if(id===null){
       return;
    }
    const nid = Number(id);
     if (isNaN(nid) || id==="" ||id.trim()===""||!Number.isInteger(nid)||nid<1) {
        alert("Geçersiz bir sayı girdiniz!");
        return;
    } 

    const index=students.findIndex(student=>student.id===nid)
    console.log(index);

    if (index === -1) {
    alert("Bu ID numarasına ait öğrenci bulunamadı!");
    return;
}

    students.splice(index,1);
    alert("Öğrenci başarıyla silindi!");
}

    function exitapp(){
    alert("Öğrenci yönetim sisteminden çıkış yapıldı.");
    }

showmenu()

