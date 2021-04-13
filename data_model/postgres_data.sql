--
-- PostgreSQL database dump
--

-- Dumped from database version 12.6 (Debian 12.6-1.pgdg100+1)
-- Dumped by pg_dump version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: directus_collections; Type: TABLE DATA; Schema: public; Owner: directus
--

SET SESSION AUTHORIZATION DEFAULT;

ALTER TABLE public.directus_collections DISABLE TRIGGER ALL;

COPY public.directus_collections (collection, icon, note, display_template, hidden, singleton, translations, archive_field, archive_app_filter, archive_value, unarchive_value, sort_field) FROM stdin;
about	info	\N	\N	f	t	\N	\N	t	\N	\N	\N
\.


ALTER TABLE public.directus_collections ENABLE TRIGGER ALL;

--
-- Data for Name: directus_fields; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_fields DISABLE TRIGGER ALL;

COPY public.directus_fields (id, collection, field, special, interface, options, display, display_options, locked, readonly, hidden, sort, width, "group", translations, note) FROM stdin;
21	about	id	\N	numeric	\N	\N	\N	f	t	t	\N	full	\N	\N	\N
22	about	user_updated	user-updated	user	{"display":"both"}	user	\N	f	t	t	\N	half	\N	\N	\N
23	about	date_updated	date-updated	datetime	\N	datetime	{"relative":true}	f	t	t	\N	half	\N	\N	\N
24	about	text	\N	markdown	\N	formatted-value	\N	f	f	f	\N	full	\N	\N	\N
25	about	cover	\N	image	\N	image	\N	f	f	f	\N	full	\N	\N	\N
\.


ALTER TABLE public.directus_fields ENABLE TRIGGER ALL;

--
-- Data for Name: directus_migrations; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_migrations DISABLE TRIGGER ALL;

COPY public.directus_migrations (version, name, "timestamp") FROM stdin;
20201028A	Remove Collection Foreign Keys	2021-04-11 22:55:09.976009+00
20201029A	Remove System Relations	2021-04-11 22:55:10.051311+00
20201029B	Remove System Collections	2021-04-11 22:55:10.272601+00
20201029C	Remove System Fields	2021-04-11 22:55:10.300847+00
20201105A	Add Cascade System Relations	2021-04-11 22:55:10.463883+00
20201105B	Change Webhook URL Type	2021-04-11 22:55:10.48312+00
\.


ALTER TABLE public.directus_migrations ENABLE TRIGGER ALL;

--
-- Data for Name: directus_roles; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_roles DISABLE TRIGGER ALL;

COPY public.directus_roles (id, name, icon, description, ip_access, enforce_tfa, module_list, collection_list, admin_access, app_access) FROM stdin;
3b10b90b-047f-4961-b40b-9ae90cbba148	Admin	supervised_user_circle	\N	\N	f	\N	\N	t	t
\.


ALTER TABLE public.directus_roles ENABLE TRIGGER ALL;

--
-- Data for Name: directus_permissions; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_permissions DISABLE TRIGGER ALL;

COPY public.directus_permissions (id, role, collection, action, permissions, validation, presets, fields, "limit") FROM stdin;
13	\N	about	read	\N	\N	\N	*	\N
\.


ALTER TABLE public.directus_permissions ENABLE TRIGGER ALL;

--
-- Data for Name: directus_relations; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_relations DISABLE TRIGGER ALL;

COPY public.directus_relations (id, many_collection, many_field, many_primary, one_collection, one_field, one_primary, one_collection_field, one_allowed_collections, junction_field) FROM stdin;
7	about	user_updated	id	directus_users	\N	id	\N	\N	\N
8	about	cover	id	directus_files	\N	id	\N	\N	\N
\.


ALTER TABLE public.directus_relations ENABLE TRIGGER ALL;

--
-- Data for Name: directus_settings; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_settings DISABLE TRIGGER ALL;

COPY public.directus_settings (id, project_name, project_url, project_color, project_logo, public_foreground, public_background, public_note, auth_login_attempts, auth_password_policy, storage_asset_transform, storage_asset_presets, custom_css) FROM stdin;
\.


ALTER TABLE public.directus_settings ENABLE TRIGGER ALL;

--
-- Data for Name: directus_webhooks; Type: TABLE DATA; Schema: public; Owner: directus
--

ALTER TABLE public.directus_webhooks DISABLE TRIGGER ALL;

COPY public.directus_webhooks (id, name, method, url, status, data, actions, collections) FROM stdin;
\.


ALTER TABLE public.directus_webhooks ENABLE TRIGGER ALL;

--
-- Name: directus_fields_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_fields_id_seq', 25, true);


--
-- Name: directus_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_permissions_id_seq', 13, true);


--
-- Name: directus_relations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_relations_id_seq', 8, true);


--
-- Name: directus_settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_settings_id_seq', 1, false);


--
-- Name: directus_webhooks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: directus
--

SELECT pg_catalog.setval('public.directus_webhooks_id_seq', 1, false);


--
-- PostgreSQL database dump complete
--

