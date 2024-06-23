

var container = document.getElementById("academy");

class Auditory {

    constructor(auditoryName, seatsCount, facultetName) {
        this.auditoryName = auditoryName;
        if (seatsCount < 10) {
            this.seatsCount = 10;
        } else if (seatsCount > 20) {
            seatsCount = 20;
        } else {
            this.seatsCount = seatsCount;
        }
        this.facultetName = facultetName;
    }


    static DisplayAuditories(arrAuditories) {
        container.innerHTML = "";
        for (let i = 0; i < arrAuditories.length; i++) {
            container.innerHTML += arrAuditories[i].Info();
        }
    }


    static DisplayByFaculty(arrAuditories, facultyName) {
        container.innerHTML = "";
        for (let i = 0; i < arrAuditories.length; i++) {
            if (arrAuditories[i].facultetName === facultyName) {
                container.innerHTML += arrAuditories[i].Info();
            }
        }
    }


    static DisplayForGroup(arrAuditories, group) {
        container.innerHTML = "";
        for (let i = 0; i < arrAuditories.length; i++) {
            if (arrAuditories[i].facultetName === group.facultetName && arrAuditories[i].seatsCount >= group.studentsCount) {
                container.innerHTML += arrAuditories[i].Info();
            }
        }
    }


    static SortBySeats(arrAuditories) {
        arrAuditories.sort((a, b) => a.seatsCount - b.seatsCount);
        Auditory.DisplayAuditories(arrAuditories);
    }


    static SortByName(arrAuditories) {
        arrAuditories.sort((a, b) => a.auditoryName.localeCompare(b.auditoryName));
        Auditory.DisplayAuditories(arrAuditories);
    }


   Info(){
        return `Auditory name: ${this.auditoryName}, Seats count: ${this.count}, Facultet name: ${this.facultetName} <br> `;
    } 

}


let academyAuditories = [
    new Auditory("Auditory 3", 12, "C"),
    new Auditory("Auditory 1", 15, "A"),
    new Auditory("Auditory 2", 20, "B"),
    new Auditory("Auditory 4", 10, "D"),
    new Auditory("Auditory 5", 18, "E")
];


Auditory.DisplayAuditories(academyAuditories);
//Auditory.SortByName(academyAuditories);