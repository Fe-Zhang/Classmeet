MAIN ENDPOINTS:

[PROJECT_NAME]@appspot.com...

INDEX:
'/'
Gives initial Hello Message.
METHODS:
GET
-----------------------------------------------------------------------------------
RETURN_CLASSES
'/classes/<int:key>'
Example: '/classes/20'
Returns specified "key" amount of classes.
JSON FORM:
{
CLASS_NAME: CLASSNUM,
.
.
.
}
METHODS:
GET
POST
PUT
-----------------------------------------------------------------------------------
PUT_USER_CLASSES
'/user_classes/?user=[user_email]&course=[user_course_1]&course=[user_course_2]..'
Example: '/user_classes?user=bob@gmail.com&course=Elementary%20Memes'
Returns JSON of Added Classes.
JSON FORM:
{
Added: [Class1,
       Class2,
       Class3]
}
-----------------------------------------------------------------------------------
GET_CLASSES_FROM_USER
'/get_classes_from_user?user=[user_email]'
EXAMPLE:
'/get_classes_from_user?user=george@gmail.com'
JSON FORM:
{
USER_EMAIL: [COURSE_NAME1,
           COURSE_NAME2,
           COURSE_NAME3]

}
METHODS:
GET

-----------------------------------------------------------------------------------

GET_USERS_FROM_CLASSES
'/get_users_from_classes/?course=[user_course_1]&course=[user_course_2]...'
EXAMPLE: '/get_users_from_classes/?course=Physics&course=Science%20And%20Astronomy...'
JSON FORM:
{
user_course_1: [USER_EMAIL1,
                USER_EMAIL2,
                USER_EMAIL3]

user_course_2: [USER_EMAIL1,
                USER_EMAIL2,
                USER_EMAIL3]

}
METHODS:
GET

-----------------------------------------------------------------------------------
GET_SIMILAR_USERS
'/find_most_similar_users/?user=[USER_EMAIL]'
EXAMPLE: '/find_most_similar_users/?user=george@gmail.com'
JSON FORM:
{
users: [USER_EMAIL_TOP1,
        USER_EMAIL_TOP2,
              .
              .
        USER_EMAIL_TOP5]
}
METHODS:
GET
