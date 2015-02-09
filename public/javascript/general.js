
window.onload = function()
{
    var hamburger = $('.menu__icon');
    hamburger.click(function() {
     hamburger.toggleClass('active');
     return false;
  });

    $("#my-calendar").zabuto_calendar({language: "en", today: true,action: function() {myDateFunction(this.id);}});

    var previous;
    function myDateFunction(id) {
        previous = id;
        var date = $("#" + id).data("date");
        document.getElementById(previous).style.background = "white";
        document.getElementById(id).style.background = "#37C3DD";

        console.log(date);
    }
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $('.selectpicker').selectpicker();

    $('.clockpicker').clockpicker();

    $('.example-show').click(function () {
        
        $(this).parent().parent().children().removeClass('hide-info');
    });

    $("#btn-create").click(function(){
    var rapports = [];
    var table = document.getElementById("table");
    var row = table.insertRow(1);
    var cellProject = row.insertCell(0);
    var cellDate = row.insertCell(1);
    var cellStart = row.insertCell(2);
    var cellEnd = row.insertCell(3);
    var cellBreak = row.insertCell(4);
    var cellWorkedHours = row.insertCell(5);
    var cellTask = row.insertCell(6);
    var cellEdit = row.insertCell(7);

    var project = $("#project").val();
    var task = $("#task").val();
    var startTime = $("#start-time").val();
    var endTime = $("#end-time").val();
    var startBreak = $("#start-break").val();
    var endBreak = $("#end-break").val();
    var comment = $("#comment").val();

    var rapport = {project: project, task: task, startTime: startTime, endTime: endTime, startBreak: startBreak, endBreak: endBreak, comment: comment};

    cellProject.innerHTML = rapport.project;
    cellProject.setAttribute('data-title','Projekt');
    cellDate.innerHTML = "Hårddata";
    cellDate.setAttribute('data-title', 'Datum');
    cellStart.innerHTML= rapport.startTime;
    cellStart.setAttribute('data-title', 'Start')
    cellEnd.innerHTML = rapport.endTime;
    cellEnd.setAttribute('data-title', 'Slut')
    cellBreak.innerHTML = "Hårddata";
    cellBreak.setAttribute('data-title', 'Rast')
    cellWorkedHours.innerHTML = "Hårddata";
    cellWorkedHours.setAttribute('data-title', 'Arbetade timmar')
    cellTask.innerHTML = rapport.task;
    cellTask.setAttribute('data-title', 'Uppgift')
    cellEdit.innerHTML = "<div class=btn-group role=group aria-label=...> <button type=button class=btn btn-warning>Editera</button> <button type=button class=btn btn-danger>Ta bort</button> </div>";
    cellEdit.setAttribute('data-title', 'Ändra')
    var date = $("#" + id).data("date");
    rapports.push(rapport);
    console.log(rapport);
    console.log(rapports);

    });

}











