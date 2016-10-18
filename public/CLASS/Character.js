DatabaseReference mRootRef = FirebaseDatabase.getInstance().getReference();
DatabaseReference mUsersRef = mRootRef.child("users");
DatabaseReference mMessagesRef = mRootRef.child("messages");
FriendlyMessage friendlyMessage = new FriendlyMessage("Hello World!", "Jirawatee");
mMessageRef.push().setValue(friendlyMessage);