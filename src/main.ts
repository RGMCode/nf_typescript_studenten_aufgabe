import './style.css'

    /* Aufgabe TypeScript:
    - erstelle ein Studenten-Object das einen Namen und eine Id hat
    - erstelle ein Studenten-Array
    - schreibe eine function, die einen Studenten in einem Array findet und seinen Namen updated
    - verändere deine function so, dass das ursprüngliche Objekt nicht verändert, sondern ein neues erstellt wird
    */

    type Student = {
        id: string;
        fistName: string;
        lastName: string;
        sex: string;
        age: string;
    }

    let students: Student[] = [];

    function addStudent(student: Student) {
        students.push(student);
    }


    function getAllStudents() {
        return students;
    }

    function getStudentById(id: string) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                return students[i];
            }
        }

        return null;
    }

    function updateStudentByid(id: string, student: Student) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                students[i] = student;
            }
        }
    }

    function updateStudentByIdFunctional(id: string, student: Student) {
        students = students.map(x => x.id === id ? student : x);
    }

    addStudent({id: "1", fistName: "René", lastName: "Mengedoth", sex: "M", age: "33"});
    addStudent({id: "2", fistName: "Sunny", lastName: "Mengedoth", sex: "M", age: "0"});
    addStudent({id: "3", fistName: "Angel", lastName: "Rüther", sex: "W", age: "76"});

    console.log(getAllStudents());

    console.log(getStudentById("2"));

    updateStudentByid("3", {id: "3", fistName: "Ingelohre", lastName: "Rüther", sex: "W", age: "76"})
    console.log(getStudentById("3"));

    updateStudentByIdFunctional("3", {id: "3", fistName: "Helminie", lastName: "Rüther", sex: "W", age: "90"})
    console.log(getStudentById("3"))

    console.log(getAllStudents());
