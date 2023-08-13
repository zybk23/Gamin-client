import React, { useState } from "react";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import "./style.scss";

const override = {
	display: "block",
	margin: "0 auto",
};

const List = () => {
	const { games, loading } = useSelector(state => state.dataSlice)
	const [searchField, setSearchField] = useState("")

	//Filter games by typing something on the input area
	const filteredGames = games.filter(game => {
		return game.title.toLowerCase().indexOf(
			searchField.toLowerCase()
		) !== -1
	});

	return (
		<div className="list-container" >
			<input placeholder="search games" value={searchField} type="text" className="search" onChange={(e) => setSearchField(e.target.value)} />
			{
				loading ?
					<ClipLoader
						color={"#62DEC2"}
						loading={loading}
						cssOverride={override}
						size={150}
						aria-label="Loading Spinner"
						data-testid="loader"
					/> :
					<div className="img-container" >
						{
							filteredGames.map(item => (
								item?.thumb?.url &&
								<img src={item.thumb.url} />
							))
						}
					</div>
			}
		</div>
	);
}

export default List;
