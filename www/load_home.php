<?php

include("functions.php");

$result=get_tutorials();

$tutorialdata=array();

foreach($result as $value){

	if(!empty($value['t_id'])){
	
	$topic_id=$value['t_id'];
	$topic=$value['topic'];
	$description=$value['description'];
	$youtube_link=$value['youtube_link'];
	$pdf_link=$value['pdf_link'];
	$self_practice=$value['self_practice'];
	$feedback=$value['feedback'];
	$own_voice=$value['own_voice'];
	
	$tutorialdata[]=array('topic_id'=>$topic_id,'topic'=>$topic,'description'=>$description,'youtube_link'=>$youtube_link,'pdf_link'=>$pdf_link,'self_practice'=>$self_practice,'feedback'=>$feedback,'own_voice'=>$own_voice);

	}

}

$alltutorialdata['tutorialdata']=$tutorialdata;

echo json_encode($alltutorialdata);

?>