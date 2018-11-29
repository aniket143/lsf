<?php

include("functions.php");

$data_back = json_decode(file_get_contents('php://input'));

$textbx = $data_back->{"textbx"};
//echo $age; 
$chkbox = $data_back->{"chkbox"};
$q_idbox = $data_back->{"q_idbox"};
$q_chkbox = $data_back->{"q_chkbox"};
$counte = $data_back->{"counte"};
$t_idbox = $data_back->{"t_idbox"};
$t_chkbox = $data_back->{"t_chkbox"};
//$members = $data_back->{"members"};
//$birthdate = $data_back->{"birthdate"};
$userid = $data_back->{"userid"};
//$prac ="pract1";

//$correctans = "<b>Please check correct ans</b><br><p>(1)- (c) 7 <br>(2) - (a) Samuel <br>(3) - (c) My mother's name is Sangita <br> Your Mother's name is $mname <br> Your Father's name is $fname </p>";
$db = get_my_db();

for($test = 0; $test <= count($textbx); $test++)
{
    $query="insert into inet_self_practice_ans (user_id,t_id,q_id,usr_ans,ans_date) values ( $userid ,$t_idbox[$test],$q_idbox[$test],'$textbx[$test]',default)";
	//$res=$db->query($query) or die("error in inet_self_practice_ans".$db->error);
}

for($test1 = 0; $test1 <= count($chkbox); $test1++)
{
    $query1="insert into inet_self_practice_ans (user_id,t_id,q_id,usr_ans,ans_date) values ($userid ,$t_chkbox[$test1],$q_chkbox[$test1],'$chkbox[$test1]',default)";
	//$res1=$db->query($query1) or die("error in inet_self_practice_ans".$db->error);
}
//$query="insert into inet_self_practice(srno,userid,question1,question2,question3,question4,question5,question6,question7,question8,question9,pract_chap,date_time,status)
//values('','$userid','$age','$fathername','$mothername','$brother','$sister','$mname','$fname','$members','$birthdate','$prac',default,default)";

//$res=$db->query($query) or die("error in insert	inet_self_practice".$db->error);

echo json_encode($textbx);

?>
