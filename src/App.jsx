function App() {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<div className="App">
			<img src={PF + "/person1.jpg"} alt="testPicture" />
		</div>
	);
}

export default App;
