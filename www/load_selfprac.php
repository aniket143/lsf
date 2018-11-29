<?php

include("functions.php");
$data_back = json_decode(file_get_contents('php://input'));

$tid = $data_back->{"t_id"};


$result=get_selfprac($tid);

$selfpracdata=array();
$qut_type = false;
foreach($result as $value){

	if(!empty($value['q_id'])){
	
	$q_id=$value['q_id'];
	$topic_id=$value['t_id'];
	$qtype=$value['q_type'];
	if($qtype == 'Objective') {$qut_type = true;}else {$qut_type = false;}
	$qtext=$value['q_text'];
	$qimage=$value['q_image'];
	$opt1=$value['opt1'];
	$opt2=$value['opt2'];
	$opt3=$value['opt3'];
	$opt4=$value['opt4'];
	$ans=$value['ans'];
	$selfpracdata[]=array('q_id'=>$q_id,'topic_id'=>$topic_id,'qut_type'=>$qut_type,'qtext'=>$qtext,'qimage'=>$qimage,'opt1'=>$opt1,'opt2'=>$opt2,'opt3'=>$opt3,'opt4'=>$opt4,'ans'=>$ans);

	}

}

$allselfpracdata['selfprac']=$selfpracdata;

echo json_encode($allselfpracdata);

?>