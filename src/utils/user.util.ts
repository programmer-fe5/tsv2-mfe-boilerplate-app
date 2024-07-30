import { User } from '../types/example.type';

class UserAccount {
  id: number;
  firstName: string;
  lastName?: string;
  email: string;
  isActive: boolean;

  constructor(firstName: string, email: string, lastName?: string) {
    this.firstName = firstName;
    if (lastName) {
      this.lastName = lastName;
    }
    this.email = email;
    this.id = 1;
    this.isActive = false;
  }
}

/**
 * Creates a new user.
 *
 * @param firstName The first name of the user.
 * @param email The email of the user.
 * @param lastName The last name of the user, not required.
 * @returns The newly created user.
 */
export const createUser = (
  firstName: string,
  email: string,
  lastName?: string,
): User => {
  const user: User = new UserAccount(firstName, email, lastName);
  return user;
};

/**
 * Switches the active state of a user.
 *
 * @param user The user that you'd like to switch the active state.
 * @returns The user with switched active state.
 */
export const switchActive = (user?: User): void => {
  if (user) user.isActive = !user.isActive;
};
