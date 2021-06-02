name_of_the_student_array=[];

function submit()
{
var enter_name = document.getElementById("enter_name").value;
console.log(enter_name);
name_of_the_student_array.push(enter_name); 
var remove_commas = name_of_the_student_array.join("<br>");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas;
//document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
document.getElementById("enter_name").value = "";
}

 function sorting()
 { 
 name_of_the_student_array.sort();
 var remove_commas = name_of_the_student_array.join("<br>");
 console.log(remove_commas);
 document.getElementById("sorted_list").innerHTML = "<h3>Sorted List</h3>" + "<br>" + remove_commas;
 }

 function search()
{
    var search_name = document.getElementById("search_name_2").value; 
    var count = 0;
    for (var k=0; k < name_of_the_student_array.length; k++)
    { 
            if (name_of_the_student_array[k] == search_name) 
            {
                 count++;
            }
    }
    document.getElementById("search_result").innerHTML = "Name " + search_name +" occurs " + count + " times";
}
