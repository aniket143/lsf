<?php

include("functions.php");
$data_back = json_decode(file_get_contents('php://input'));

$tid = $data_back->{"t_id"};
$youtoublink = $data_back->{"youtoublink"};

$result=get_voicedata($tid);

$contestdata=array();

foreach($result as $value){

	if(!empty($value['t_id'])){
	
	$topic_id=$value['t_id'];
	//$topic=$value['topic'];
	$description=$value['description'];
	//$youtube_link=$value['youtube_link'];
	//$pdf_link=$value['pdf_link'];
	//$self_practice=$value['self_practice'];
	//$feedback=$value['feedback'];
	$date_voice=$value['date_created'];
	
	$voicedata[]=array('topic_id'=>$topic_id,'description'=>$description,'youtube_link'=>$youtoublink,'date_voice'=>$date_voice);

	}

}

$allvoicedata['voicedata']=$voicedata;

echo json_encode($allvoicedata);

?>