// Actions
import { profileActions } from '../actions';
import { newPassword } from './../../forms/shapes';

describe('profile actions', () => {
    test('fillProfile', () => {
        expect(profileActions.fillProfile(__.userProfile)).toMatchSnapshot()
    });

    test('updateAvatar', () => {
        expect(profileActions.updateAvatar(__.url)).toMatchSnapshot()
    });

    test('updateNameAsync', () => {
        expect(profileActions.updateNameAsync(__.newName)).toMatchSnapshot()
    });

    test('updateAvatarAsync', () => {
        expect(profileActions.updateAvatarAsync(__.newAvatar)).toMatchSnapshot()
    });

    test('updatePasswordAsync', () => {
        expect(profileActions.updatePasswordAsync(__.newPassword)).toMatchSnapshot()
    });

});