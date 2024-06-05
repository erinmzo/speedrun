import supabase from "../supabase/supabase";

export async function getLoginUser(loginInfo) {
	const { data, error } = await supabase.auth.signInWithPassword(loginInfo);
	if (error) throw error;
	return data;
}
export async function signOut() {
	const { error } = await supabase.auth.signOut();
	if (error) throw error;
}
