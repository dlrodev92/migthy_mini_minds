import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { createTest, describe, it, expect  } from 'vitest';
import axios from 'axios';
import Login from '../pages/Login';

// test('login sends post request with valid credentials', async () => {
//   // Mock axios.post method to return a successful response
//   const newUser = await createUser(newUserPayload)
// })
//   test.spyOn(axios, 'post').mockResolvedValue({ data: { token: 'fakeToken', userId: 'fakeUserId' } });

//   render(<Login />, test.wrapper);

//   // Fill in the login form
//   fireEvent.change(screen.getByLabelText('username'), { target: { value: 'peterpan1' } });
//   fireEvent.change(screen.getByLabelText('password'), { target: { value: '123' } });

//   // Click the login button
//   fireEvent.click(screen.getByText('Login'));

//   // Wait for the post request to complete
//   await waitFor(() => test.expect(axios.post).toHaveBeenCalledTimes(1));

//   // Verify the post request was called with the correct data
//   test.expect(axios.post).toHaveBeenCalledWith('https://mighty-mini-minds-backend.onrender.com/users/login', {
//     username: 'peterpan1',
//     password: '123',
//   });

//   // Verify the authentication context was updated correctly
//   // You may need to mock the handleAuthentication and navigate functions from the useAuth hook
//   test.expect(handleAuthentication).toHaveBeenCalledWith(true);
//   test.expect(navigate).toHaveBeenCalledWith('/appLayout/welcomePage');
// });

describe('login user', () => {
  test('login sends post request with valid credentials', async () => {
    const newUserPayload = {
      username: 'peterpan1',
      password: '123',
    }

    axios.post.mockResolvedValue({
      data: newUserPayload,
    })

    const loginCredentials = await createUser(newUserPayload)
  })
})
