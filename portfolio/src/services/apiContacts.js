import supabase from "./supabase";

export async function createContact(newContact) {
  try {
    const { data: existingContacts, error: existingContactsError } =
      await supabase.from("contact").select("*").eq("email", newContact.email);

    if (existingContactsError) {
      throw new Error(
        `Error checking existing contact: ${existingContactsError.message}`
      );
    }

    if (existingContacts.length === 0) {
      // Email does not exist, create a new contact
      const { data, error } = await supabase
        .from("contact")
        .insert([newContact])
        .select();

      if (error) {
        throw new Error(`New contact could not be created: ${error.message}`);
      }

      console.log(data);
      return data;
    } else if (existingContacts.length === 1) {
      // Email exists, update the existing contact
      const { data, error } = await supabase
        .from("contact")
        .update(newContact)
        .eq("email", newContact.email)
        .select();

      if (error) {
        throw new Error(`Error updating existing contact: ${error.message}`);
      }

      return data;
    } else {
      // Multiple contacts with the same email found (should not happen)
      throw new Error(
        `Multiple contacts found with the same email: ${newContact.email}`
      );
    }
  } catch (error) {
    console.error("Error creating/updating contact:", error);
    throw error;
  }
}
