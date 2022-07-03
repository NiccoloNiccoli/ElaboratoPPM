<?php
	header('Content-Type: text/json');
	require_once("config.php");

	$action = $_POST['action'];

	$query_string = "";

	switch($action) {
		case "get" :
			$image_id = $_POST['imageId'];
		    getImage($image_id);
		break;

		case "count":
		    countQuestions();
		break;

		case "getAllImages":
		    getAllImages();
		break;
	}

	function getImage($img_id){
        $query_string = 'SELECT * FROM art_infos NATURAL JOIN art_images WHERE id = '.$img_id;
        $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

        $result = $mysqli->query($query_string);

        if($row = $result->fetch_array(MYSQLI_ASSOC)){
            $output = array('id' => $row['id'], 'name' => $row['name'], 'author' => $row['author'], 'description' => $row['description'], 'coordinates' => $row['coordinates'],'question' => $row['question'], 'location' => $row['location'], 'year' => $row['year'], 'lr-link' => $row['low-res_link'], 'lr-width' => $row['low-res_width'],'mr-link' => $row['mid-res_link'], 'mr-width' => $row['mid-res_width'], 'hr-link' => $row['high-res_link'], 'hr-width' => $row['high-res_width']);
            $response = array('data' => $output, 'type' => 'get');
        }
        echo json_encode($response);

	}

	function countQuestions(){
        $query_string = 'SELECT COUNT(*) as c FROM art_infos';
        $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
        $result = $mysqli->query($query_string);
        $row = $result->fetch_object()->c;
        echo json_encode($row);
	}

	function getAllImages(){
            $query_string = 'SELECT `low-res_link`,`low-res_width`, `mid-res_link`,`mid-res_width`, `high-res_link`, `high-res_width` FROM art_images';
            $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

            $result = $mysqli->query($query_string);

            $output_array = array();

            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $infos = array('lr-link' => $row['low-res_link'], 'lr-width' => $row['low-res_width'],'mr-link' => $row['mid-res_link'], 'mr-width' => $row['mid-res_width'], 'hr-link' => $row['high-res_link'], 'hr-width' => $row['high-res_width']);
                array_push($output_array, $infos);
            }

            $response = array('data' => $output_array, 'type' => 'getAllImages');

            echo json_encode($response);

    	}

?>