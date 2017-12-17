<style>
    input{
        position: absolute;
        top: 145px;
    }
    p{
        cursor: pointer;
    }

</style>
<input type="text" id="searchbar" name="search" placeholder="search" onkeyup="search(this.value)">
<div id="result" style="color: black;">
</div>

<script>


    result = document.getElementById('result');
    function search(stringSearch){
        if (stringSearch == ""){result.innerHTML="nothing";}
        var xmlhttp = new XMLHttpRequest();//instance van AJAX object
        xmlhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                result.innerHTML = this.responseText;
                var ps=result.getElementsByTagName("p");
                for(var i=0;i<ps.length;i++)
                {
                    ps[i].addEventListener("click",clickEenLink);
                }
            }
        }
        xmlhttp.open("GET", "model/search.php?search=" + stringSearch, true);
        xmlhttp.send();

    }
    search(" ");
    function clickEenLink(e)
    {
        console.log(e.currentTarget.innerHTML);
        location.assign("?action=videoHero")
    }

</script>
