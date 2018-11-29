<?php

include("functions.php");
$data_back = json_decode(file_get_contents('php://input'));

$result=get_videopage();

$videodata=array();

foreach($result as $value){

	if(!empty($value['v_id'])){
	
	$v_id=$value['v_id'];
	$video_youtube_link=$value['video_youtube_link'];
	$info=$value['info'];
	//$youtube_link=$value['youtube_link'];
	$today_date=$value['today_date'];
	//$self_practice=$value['self_practice'];
	//$feedback=$value['feedback'];
	//$own_voice=$value['own_voice'];
	
	$videodata[]=array('v_id'=>$v_id,'video_youtube_link'=>$video_youtube_link,'info'=>$info,'today_date'=>$today_date);

	}

}

$allvideodata['videodata']=$videodata;

echo json_encode($allvideodata);

?>