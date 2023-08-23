import {act, render, screen, waitFor} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Nav from '../components/Nav';
import { BrowserRouter, MemoryRouter,Route, Routes } from 'react-router-dom';
import renderer from 'react-test-renderer';

test.skip('renders Nav component with nested routes', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Nav />}>
                <Route path="homepage" element={<div>Home Content</div>} />
                <Route path="shop" element={<div>Shop Content</div>} />
                <Route path="cart" element={<div>Cart Content</div>} />
            </Route>
          </Routes>
        </MemoryRouter>
      );
    });
    const user = userEvent.setup();

    // Test navigation and rendering of nested route content
    const link = screen.getByRole('link', {
      name: /homepage/i,
    });
    await act(async()=>{
        user.click(link)
    })
    const homeContent = screen.getByText('Home Content');
    expect(homeContent).toBeInTheDocument();
  
    // You can similarly test other routes and their content
  });
test.skip('Render correctly Nav component',()=>{
    render(<Nav />)
})
test.skip('Show correctly title from Nav component',()=>{
    render(<BrowserRouter><Nav /></BrowserRouter>)
    expect(screen.getByRole("heading",{level: 1, name:"Shopping Cart"})).toBeInTheDocument();
})
test.skip('Show links correctly',()=>{
    render(<BrowserRouter><Nav /></BrowserRouter>)
    expect(screen.getByRole("heading",{level: 2, name:"Homepage"})).toBeInTheDocument();
    expect(screen.getByRole("heading",{level: 2, name:"Shop"})).toBeInTheDocument();
})
test.skip('has the correct component structure', () => {
    render(<BrowserRouter><Nav /></BrowserRouter>);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getAllByRole('heading', { level: 2})).toHaveLength(2); 
    expect(screen.getByRole('navigation')).toBeInTheDocument(); 
    expect(screen.getByRole('banner')).toBeInTheDocument();
});
test.skip('navigates to the correct routes when clicked', async() => {
    const user = userEvent.setup()
    render(<BrowserRouter><Nav /></BrowserRouter>);
    await user.click(screen.getByRole("heading",{level: 2, name:"Homepage"}));
    await user.click(screen.getByRole("heading",{level: 2, name:"Shop"}));
    
});

