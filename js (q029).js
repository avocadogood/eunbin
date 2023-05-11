// 가위, 바위, 보 게임	v0.1.0	
// 플레이어	컴퓨터	각각	prompt 로 가위, 바위, 보 입력하는 방식으로 해서 구현
// 조건문..
// 자기 깃허브에 코드 올리시고 시트 o 에 링크하세요
// 참고	가위바위보	영어로	Rock Paper Scissors	

// window.onload = function() {


    var player=prompt("가위바위보!");
    var computer=Math.floor(Math.random()*3)+1;

    switch (computer){
        case 1: alert("가위!");
            break;
        case 2: alert("바위!");
            break;
        case 3: alert("보!");
            break;
    }

    // if(player=="가위" && computer==1){
    //     document.write("비겼습니다!");
    // } else if(player=="가위" && computer==2){
    //     document.write("졌습니다!");
    // } else if(player=="가위" && computer==3){
    //     document.write("이겼습니다!");
    // }

    // if(player=="바위" && computer==1){
    //     document.write("이겼습니다!");
    // } else if(player=="바위" && computer==2){
    //     document.write("비겼습니다!");
    // } else if(player=="바위" && computer==3){
    //     document.write("졌습니다!");
    // }

    // if(player=="보" && computer==1){
    //     document.write("졌습니다!");
    // } else if(player=="보" && computer==2){
    //     document.write("이겼습니다!");
    // } else if(player=="보" && computer==3){
    //     document.write("비겼습니다!");
    // }

    switch(player){
        case "가위":
            if(computer==1){
                document.write("비겼습니다!")
            } else if(computer==2){
                document.write("졌습니다!");
            } else if(computer==3){
                document.write("이겼습니다!");
            }
    }