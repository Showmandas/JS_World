setInterval(
    function timeget(){
      var select = document.getElementById('sarc').value;
      if(select=="afg"){
          document.getElementById("time").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Asia/Kabul',timeStyle:'medium',hourCycle:'h24'})
  //    console.log(select);
      }
      if(select=="ban"){
          document.getElementById("time").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Asia/Dhaka',timeStyle:'medium',hourCycle:'h24'})
      // console.log(select);
      }
      if(select=="bhu"){
          document.getElementById("time").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Asia/Thimphu',timeStyle:'medium',hourCycle:'h24'})
      // console.log(select);
      }
      if(select=="in"){
          document.getElementById("time").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Asia/Kolkata',timeStyle:'medium',hourCycle:'h24'})
      // console.log(select);
      }
      if(select=="mal"){
          document.getElementById("time").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Indian/Maldives',timeStyle:'medium',hourCycle:'h24'})
      // console.log(select);
      }
      if(select=="nep"){
          document.getElementById("time").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Asia/Kathmandu',timeStyle:'medium',hourCycle:'h24'})
      // console.log(select);
      }
      if(select=="pak"){
          document.getElementById("time").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Asia/Karachi',timeStyle:'medium',hourCycle:'h24'})
      // console.log(select);
      }
      if(select=="sri"){
          document.getElementById("time").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Asia/Colombo',timeStyle:'medium',hourCycle:'h24'})
      // console.log(select);
      }

    },1000);