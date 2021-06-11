function App() {
<<<<<<< HEAD
  return <div className="App"></div>;
=======
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/host" component={Host} />
      </Switch>
    </Router>
  );
>>>>>>> develop
}

export default App;
