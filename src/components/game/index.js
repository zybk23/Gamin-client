import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import gameBackground from "../../images/bg2.png";
import "./style.scss";

const Games = () => {
	const { slotList } = useSelector(state => state.dataSlice)
	const [coinCount, setCoinCount] = useState(20)
	const [resultSlotList, setResultSlotList] = useState([])
	const [winPoint, setWinPoint] = useState(0)

	// This function works like this after clicking the spin button generate a random slot list
	const generateRandomSlot = () => {
		if (coinCount === 0) {
			return alert("Buy new spin right!")
		}
		const newList = []

		for (let i = 0; i < 3; i++) {
			const dataNum = Math.floor(Math.random() * slotList[i].length - 1) + 1;

			newList.push(slotList[i][dataNum])
		}

		setCoinCount(coinCount - 1)
		setResultSlotList(newList)
	}

	useEffect(() => {

		const counts = {};
		resultSlotList.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
		setWinPoint(0)

		// if random results all include the same slot inside the array this "if case" works
		if (Object.keys(counts).length === 1) {
			if (resultSlotList[0] === "apple") {
				setCoinCount(coinCount + 20)
				setWinPoint(20)
			}
			if (resultSlotList[0] === "banana") {
				setCoinCount(coinCount + 15)
				setWinPoint(15)
			}
			if (resultSlotList[0] === "cherry") {
				setCoinCount(coinCount + 50)
				setWinPoint(50)
			}
			if (resultSlotList[0] === "grapes") {
				setCoinCount(coinCount + 3)
				setWinPoint(3)
			}
		}

		// if random results include the 2 same slot and order from left to right inside the array this "if case" works
		if (Object.keys(counts).length === 2) {
			if ((resultSlotList[0] === "cherry" && resultSlotList[1] === "cherry") || resultSlotList[1] === "cherry" && resultSlotList[2] === "cherry") {
				setCoinCount(coinCount + 40)
				setWinPoint(40)
			}
			if ((resultSlotList[0] === "apple" && resultSlotList[1] === "apple") || resultSlotList[1] === "apple" && resultSlotList[2] === "apple") {
				setCoinCount(coinCount + 10)
				setWinPoint(10)
			}
			if ((resultSlotList[0] === "banana" && resultSlotList[1] === "banana") || (resultSlotList[1] === "banana" && resultSlotList[2] === "banana")) {
				setCoinCount(coinCount + 5)
				setWinPoint(5)
			}
		}
	}, [resultSlotList])

	return (
		<div style={{ backgroundImage: `url(${gameBackground})` }} className="game-container" >
			<div className="user-info" >
				<span>Your total coins: {coinCount}</span>
				<span>Each spin cost: 1</span>
			</div>
			<div className="game-area-container" >
				<div className="game-area" >
					{
						slotList.map((slot, index) => (
							<div className="img-container" >
								{
									slotList[index].map((slot, index) => {
										return <img key={index} src={require(`../../images/${slot}.jpeg`)} alt="" />
									})
								}
							</div>
						))
					}
				</div>
				<button onClick={generateRandomSlot}>Spin</button>
				<div className="result" >
					<div className="slot-result" >
						{
							resultSlotList.map((item, index) => (
								<img key={index} src={require(`../../images/${item}.jpeg`)} alt="" />
							))
						}
					</div>
					{
						winPoint > 0 &&
						<span>
							You Win: {winPoint} coin
						</span>
					}
				</div>
			</div>

		</div>
	);
}

export default Games;
