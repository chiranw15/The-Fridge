import * as React from "react";

const TaskDescription = () => (
  <>
    <h3>About this app</h3>
    <p>
      This is a super smart fridge. You can add items and watch them slowly (or
      quickly) expire. Isn't that the dream?
    </p>
    <p>
      In the future it will be also accessible by your friends and family, you
      must take that in mind when developing.
    </p>
    <h3>Your tasks</h3>
    <ol>
      <li>
        Make form for adding stuff into our fridge alive.
        <ul>
          <li>
            Item name can't be anything that's already in the fridge. After
            submitting you should get all the items from API (they might have
            changed) by calling <code>GET /api/get-items</code> and if the name
            is already there show a warning to user.
          </li>
          <li>
            You must make sure, that our users can only put integers inside{" "}
            <code>Expires after</code> field.
          </li>
          <li>
            Send POST to <code>/api/add-item</code>, having json body:{" "}
            <code>
              &#123; name: string, expiresAfterSeconds: integer &#125;
            </code>
            . The response is updated list of items which you will place into{" "}
            <code>Items in fridge</code> section.
          </li>
        </ul>
      </li>
      <li>
        Create countdown for items' expirations. Every second decrease the
        number in "expires in <span className="badge badge-secondary">X s</span>
        " by one. When you get new data from API (e. g. after inserting) you can
        regard them as up-to-date. That means you don't need to solve the
        possible delay between getting data and placing them into list section.
      </li>
      <li>
        When a counter for single item reaches zero, first make it flash for 5
        seconds by adding <code>.pulse</code> class to badge, like this:
        "expires in <span className="badge badge-secondary pulse">0 s</span>".
        After 5 seconds just show "expired".
      </li>
    </ol>
    <h3>Rules and tips</h3>
    <ul>
      <li>
        Please don't download any dependencies or third party code. You'll save
        a lot of virtual trees 🌳.
      </li>
      <li>
        Also don't change any code in <code>backend</code> or{" "}
        <code>pages/api</code> directories, unless there is a obvious bug (hope
        there isn't 🤞).
      </li>
      <li>
        Other than that, you can treat this as any other work project. Feel free
        to modify existing and add new components. Structure your git commits
        and create good enough UX that you wouldn't be ashamed to send to our
        clients.
      </li>
      <li>
        This app uses{" "}
        <a href="http://nextjs.org/" target="_blank">
          Next.js
        </a>{" "}
        framework and{" "}
        <a href="https://getbootstrap.com" target="_blank">
          Bootstrap
        </a>{" "}
        (just the style, no JS). You can use bootstrap classes if you wish.
      </li>
    </ul>
  </>
);

export default TaskDescription;
