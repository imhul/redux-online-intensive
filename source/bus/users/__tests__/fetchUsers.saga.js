// Core
import { put, apply } from "redux-saga/effects";
import { cloneableGenerator } from "redux-saga/utils";

// Instruments
import { api } from "../../../REST";
import { uiActions } from "../../ui/actions";
import { usersActions } from "../../users/actions";
import { fetchUsers } from "../saga/workers";

const fillUsersAction = usersActions.fetchUsersAsync(__.users);

const saga = cloneableGenerator(fetchUsers)(fillUsersAction);
let clone = null;

describe("fetchUsers saga", () => {
  describe("should pass until response received", () => {
    test('should dispatch "startFetching" action', () => {
      expect(saga.next().value).toEqual(put(uiActions.startFetching()));
    });

    test("should call a fetch request", () => {
      expect(saga.next().value).toEqual(
        apply(api, api.users.fetch)
      );
      clone = saga.clone();
    });
  });

  // Status 400
  describe("should handle a 400 status response", () => {
    test("fetch request should return 400 status response", () => {
      expect(clone.next(__.fetchResponseFail400).value).toEqual(
        apply(__.fetchResponseFail400, __.fetchResponseFail400.json)
      );
    });

    test("should contain a response data object", () => {
      expect(clone.next(__.responseDataFail).value).toEqual(
        put(uiActions.emitError(__.error, "fetch users error"))
      );
    });

    test('should dispatch "stopFetching" action', () => {
      expect(clone.next().value).toEqual(put(uiActions.stopFetching()));
    });

    test("should finish", () => {
      expect(clone.next().done).toBe(true);
    });
  });

  // Status 200
  describe("should handle a 200 status response", () => {
    test("fetch request should return 200 status response data object", () => {
      expect(saga.next(__.fetchResponseSuccess).value).toEqual(
        apply(__.fetchResponseSuccess, __.fetchResponseSuccess.json)
      );
    });

    test('should dispatch "fillProfile" action', () => {
      expect(saga.next(__.fetchResponseSuccess).value).toMatchInlineSnapshot(`
Object {
  "@@redux-saga/IO": true,
  "PUT": Object {
    "action": Object {
      "payload": undefined,
      "type": "FILL_USERS",
    },
    "channel": null,
  },
}
`);
    });

    test('should dispatch "stopFetching" action', () => {
      expect(saga.next().value).toMatchInlineSnapshot(`
Object {
  "@@redux-saga/IO": true,
  "PUT": Object {
    "action": Object {
      "type": "STOP_FETCHING",
    },
    "channel": null,
  },
}
`);
    });

    test("should finish", () => {
      expect(saga.next().done).toBe(true);
    });
  });
});
