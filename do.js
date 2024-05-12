
            function getupdate(){
             console.log('updating...')
             tit=document.getElementById("title").value
         des=document.getElementById("description").value
             if(localStorage.getItem('itemname')==null){
         arr=[]
         arr.push([tit,des])
                 localStorage.setItem('itemname',JSON.stringify(arr))
     }
     else{
         arrstr=localStorage.getItem('itemname')
         arr=JSON.parse(arrstr)
         arr.push([tit,des])
         localStorage.setItem('itemname',JSON.stringify(arr))
         
     }
     update()
     
            }
            function update(){
             if (localStorage.getItem('itemname')==null){
                 arr=[]
                 localStorage.setItem('itemname', JSON.stringify(arr))
                 }
            else{
             arrstr=localStorage.getItem('itemname')
             arr=JSON.parse(arrstr)
             
         
            }
     
            let tablebody=document.getElementById('tableb')
            let str=""
            arr.forEach((element,index) => {
             str+=`
             <tr>
                     <th scope="row">${index}</th>
                     <td>${element[0]}</td>
                     <td>${element[1]}</td>
                     <td><button onclick="deleted(${index})">delete</button></td>
                   </tr>
             `
            });
            tablebody.innerHTML=str
             }
             add=document.getElementById("add")
             
             add.addEventListener("click",getupdate)
             update()


             function deleted(itemindex){
                console.log("deleted",itemindex)
                arrstr=localStorage.getItem('itemname')
                arr=JSON.parse(arrstr)
                arr.splice(itemindex,1)
                localStorage.setItem('itemname',JSON.stringify(arr))
                update()
            }
            function cleard()
            {
                if(confirm("do u want to really clear all "))
                console.log("clear")
            
                localStorage.clear()
                
                update()

            }
            function login(){
                email=document.getElementById('email').value
                pass=document.getElementById('pass').value
                if (email=="xyz@gmail.com" && pass=="password"){
                    console.log("welcome")
                        document.getElementById('form1').style.display="block"
                }  
                else{
                    console.log("incorrect password")

                }
            }