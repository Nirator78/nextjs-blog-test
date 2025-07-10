import { getPostBySlug } from "../../../lib/api";

export async function generateMetadata({ params }: any) {
	const param = await params;
	const slug = param.slug || [];
	console.log("slug", slug);

	const post = getPostBySlug(params.slug);
	console.log("post", post);
	if (slug.length < 1) {
		return {
			title: slug,
			description: "metadata.description",
		};
	}

	return {
		title: slug,
		description: "metadata.subDescription",
	};
}

export default function Layout({ children }: any) {
	return <>{children}</>;
}
