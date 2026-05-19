
        let playerName = prompt("Chào mừng đến với HeroQuest! Nhập tên của bạn:");
        console.log(playerName);
        if (playerName==null) {
            alert("Hẹn bạn quay lại");
        }
        else if(playerName.trim()===""){
            alert("Tên không được để trống");
        }
        else {
        alert("Chào " + playerName);
        let isAdult = confirm("Bạn đã đủ 18 tuổi chưa?");
        if (isAdult == true) 
            alert("Chúc bạn chơi game vui vẻ!");
         else {
            alert("Bạn chưa đủ tuổi, hẹn bạn lần sau"); 
        }
    }