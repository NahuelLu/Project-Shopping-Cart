import { render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Nav from '../components/Nav';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // Use the actual react-router-dom package
    Outlet: ()=> <div>Show Outlet</div>, // Mock implementation for Outlet
}));

test('Render correctly Nav component',()=>{
    render(<BrowserRouter><Nav /></BrowserRouter>)
})
test('Show correctly title from Nav component',()=>{
    render(<BrowserRouter><Nav /></BrowserRouter>)
    expect(screen.getByRole("heading",{level: 1, name:"Shopping Cart"})).toBeInTheDocument();
})
test('Show links correctly',()=>{
    render(<BrowserRouter><Nav /></BrowserRouter>)
    expect(screen.getByRole("heading",{level: 2, name:"Homepage"})).toBeInTheDocument();
    expect(screen.getByRole("heading",{level: 2, name:"Shop"})).toBeInTheDocument();
})
test('has the correct component structure', () => {
    render(<BrowserRouter><Nav /></BrowserRouter>);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getAllByRole('heading', { level: 2})).toHaveLength(2); 
    expect(screen.getByRole('navigation')).toBeInTheDocument(); 
    expect(screen.getByRole('banner')).toBeInTheDocument();
});
test('navigates to the correct routes when clicked', async() => {
    const user = userEvent.setup()
    render(<BrowserRouter><Nav /></BrowserRouter>);
    await user.click(screen.getByRole("heading",{level: 2, name:"Homepage"}));
    await user.click(screen.getByRole("heading",{level: 2, name:"Shop"}));
});

