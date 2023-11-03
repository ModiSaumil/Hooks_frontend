import React, { Component, useState, useContext, createContext } from 'react'
const usercontext = createContext();
const ThemeContext = createContext(null);

const Context = () => {

    const [contain, setcontain] = useState('saumil modi');
    const [theme, setTheme] = useState('light');

    return (
        <div>
            <p>----c1 start------</p>
            <h1>Context</h1>
            <ThemeContext.Provider value="light">
                <usercontext.Provider value={contain}>
                    <h1>hello ! {contain}</h1>
                    <Context2 ></Context2>
                </usercontext.Provider>
                <p>----c1 end------</p>
                <label>
                    <input
                        type="checkbox"
                        checked={theme === 'dark'}
                        onChange={(e) => {
                            setTheme(e.target.checked ? 'dark' : 'light')
                        }}
                    />
                    Use dark mode
                </label>
            </ThemeContext.Provider>
        </div>
    )
}

function Context2() {
    return (
        <>
            <p>----c2 start------</p>
            <h1>context2</h1>
            <Context_Example></Context_Example>
            <Context3></Context3>
            <p>----c2 end------</p>
        </>
    )
}

function Context3() {
    return (
        <>
            <p>----c3 start------</p>
            <h1>{useContext(usercontext)}</h1>
            <h2>context3</h2>
            <Context4></Context4>
            <p>----c3 end------</p>
        </>
    )
}

function Context4() {

    return (
        <>

            <p>----c4 start------</p>
            <h1>{useContext(usercontext)}</h1>
            <h2>context4</h2>
            <h3>hello this is context4</h3>
            <p>----c4 end------</p>
        </ >
    )
}


const userContext = createContext(null)

function Context_Example() {
    const [user, setUser] = useState(null)

    return (
        <userContext.Provider value={{ user, setUser }}>
            <Welcome />
        </userContext.Provider>
    )

}

function Welcome({ children }) {
    const { user } = useContext(userContext);

    return (


        <Panel title="Welcome">
            {user !== null ?
                <Greeting /> :
                <LoginForm />
            }
        </Panel>

    );
}

function Greeting() {
    const { user } = useContext(userContext);
    return (
        <p>You logged in as {user.name}.</p>
    )
}

function LoginForm() {
    const { setUser } = useContext(userContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const canLogin = firstName !== '' && lastName !== '';
    return (
        <>
            <label>
                First name{': '}
                <input
                    required
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </label><br />
            <label>
                Last name{': '}
                <input
                    required
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </label><br /><br />
            <Button
                disabled={!canLogin}
                onClick={() => {
                    setUser({
                        name: firstName + ' ' + lastName
                    });
                }}
            >
                Log in
            </Button><br />
            {!canLogin && <i>Fill in both fields.</i>}
        </>
    );
}

function Panel({ title, children }) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({ children, disabled, onClick }) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}


export default Context;