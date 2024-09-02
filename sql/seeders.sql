-- Created an admin
INSERT INTO
    admin (email, full_name, password)
VALUES (
        "mukulg.hestabit@gmail.com",
        "Mukul Gupta",
        "Mukul1234"
    )
    -- Created an teacher user
INSERT INTO
    user (
        full_name,
        email,
        role,
        address,
        avatar,
        current_school,
        previous_school,
        experience,
        expertise,
        is_approved
    )
VALUES (
        "Kshitij",
        "kshitij@hestabit.in",
        "teacher",
        "noida sector 70",
        "/new",
        "New school",
        "Previous School",
        "3 Yrs.",
        "SOftware",
        false
    )
    -- Created an student user
INSERT INTO
    user (
        full_name,
        email,
        role,
        address,
        avatar,
        current_school,
        previous_school,
        parents_name,
        assigned_teacher,
        is_approved
    )
VALUES (
        "akshit",
        "akshit@hestabit.in",
        "student",
        "noida sector 109",
        "/new",
        "New school",
        "Previous School",
        "Mukul",
        "-",
        false
    )
    -- Create notification for admin
INSERT INTO
    notifications (action, user_id)
VALUES (
        "pending",
        (
            SELECT id
            FROM admin
            WHERE
                email = "mukulg.hestabit@gmail.com"
        )
    ),
    (
        "pending",
        (
            SELECT id
            FROM user
            WHERE
                email = "kshitij@hestabit.in"
        )
    );