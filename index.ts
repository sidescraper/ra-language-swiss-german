const swissgermanMessages = {
    ra: {
        action: {
            add_filter: 'Filter hinzufügen',
            add: 'Neu',
            back: 'Zurück',
            bulk_actions: 'Ein Element ausgewählt |||| %{smart_count} Elemente ausgewählt',
            cancel: 'Abbrechen',
            clear_array_input: 'Liste löschen',
            clear_input_value: 'Eingabe löschen',
            clone: 'Klonen',
            confirm: 'Bestätigen',
            create: 'Erstellen',
            create_item: 'Erstelle %{item}',
            delete: 'Löschen',
            edit: 'Bearbeiten',
            export: 'Exportieren',
            list: 'Liste',
            refresh: 'Aktualisieren',
            remove_filter: 'Filter entfernen',
            remove_all_filters: 'Entferne alle Filter',
            remove: 'Entfernen',
            save: 'Speichern',
            search: 'Suchen',
            select_all: 'Alles auswählen',
            select_row: 'Spalte auswählen',
            show: 'Anzeigen',
            sort: 'Sortieren',
            undo: 'Rückgängig',
            unselect: 'Abwählen',
            expand: 'Erweitern',
            close: 'Schliessen',
            open_menu: 'Menü öffnen',
            close_menu: 'Menü schliessen',
            update: 'Aktualisieren',
            move_up: 'Nach oben',
            move_down: 'Nach unten',
            open: 'Öffnen',
            toggle_theme: 'Thema umschalten',
            select_columns: 'Spalten',
            update_application: 'Programm neu laden',
        },
        boolean: {
            true: 'Ja',
            false: 'Nein',
            null: ' ',
        },
        page: {
            create: '%{name} erstellen',
            dashboard: 'Dashboard',
            edit: '%{name} #%{id}',
            error: 'Ein Fehler ist aufgetreten',
            list: '%{name}',
            loading: 'Die Seite wird geladen.',
            not_found: 'Nicht gefunden',
            show: '%{name} #%{id}',
            empty: 'Noch kein %{name}.',
            invite: 'Neu erstellen?',
            access_denied: 'Zugriff verweigert',
            authentication_error: 'Anmeldung ist fehlgeschlagen',
        },
        input: {
            file: {
                upload_several:
                    'Zum Hochladen: Dateien hineinziehen oder hier klicken, um Dateien auszuwählen.',
                upload_single: 'Zum Hochladen: Datei hineinziehen oder hier klicken, um eine Datei auszuwählen.',
            },
            image: {
                upload_several:
                    'Zum Hochladen: Bilder hineinziehen oder hier klicken, um Bilder auszuwählen.',
                upload_single:
                    'Zum Hochladen: Bild hineinziehen oder hier klicken, um ein Bild auszuwählen.',
            },
            references: {
                all_missing: 'Die zugehörigen Referenzen konnten nicht gefunden werden.',
                many_missing:
                    'Mindestens eine der zugehörigen Referenzen scheint nicht mehr verfügbar zu sein.',
                single_missing:
                    'Eine zugehörige Referenz scheint nicht mehr verfügbar zu sein.',
            },
            password: {
                toggle_visible: 'Passwort ausblenden',
                toggle_hidden: 'Passwort einblenden',
            },
        },
        message: {
            about: 'Über',
            are_you_sure: 'Bist Du sicher?',
            auth_error:
                'Beim Validieren des Authentifizierungstokens ist ein Fehler aufgetreten.',
            bulk_delete_content:
                'Möchtest Du %{name} wirklich löschen? |||| Möchtest Du diese %{smart_count} Elemente wirklich löschen?',
            bulk_delete_title:
                'Lösche %{name} |||| Lösche %{smart_count} %{name} Elemente',
            bulk_update_content:
                'Möchtest Du %{name} wirklich aktualisieren? |||| Möchtest Du diese %{smart_count} Elemente wirklich aktualisieren?',
            bulk_update_title:
                'Update %{name} |||| Update %{smart_count} %{name}',
            clear_array_input: 'Bist Du sicher, dass Du die gesamte Liste löschen möchten?',
            delete_content: 'Möchtest Du diesen Inhalt wirklich löschen?',
            delete_title: 'Lösche %{name} #%{id}',
            details: 'Details',
            error:
                'Ein Fehler ist aufgetreten und Ihre Anfrage konnte nicht abgeschlossen werden.',
            invalid_form: 'Das Formular ist ungültig. Bitte überprüfe Deine Eingaben.',
            loading: 'Die Seite wird geladen, bitte habe etwas Geduld.',
            no: 'Nein',
            not_found:
                'Die Seite konnte nicht gefunden werden.',
            yes: 'Ja',
            unsaved_changes:
                'Einige Änderungen wurden nicht gespeichert. Bist Du sicher, dass Du diese Seite verlassen wollen?',
            access_denied:
                "Du verfügst nicht über die erforderlichen Berechtigungen, um auf diese Seite zuzugreifen.",
            authentication_error:
                'Der Authentifizierungsserver hat einen Fehler zurückgegeben und Deine Anmeldeinformationen konnten nicht überprüft werden.',
        },
        navigation: {
            clear_filters: 'Filter löschen',
            no_filtered_results: '%{name} wurde im aktuellen Filter nicht gefunden.',
            no_results: 'Keine Resultate gefunden',
            no_more_results:
                'Die Seite %{page} enthält keine Inhalte.',
            page_out_of_boundaries: 'Die Seite %{page} liegt ausserhalb des gültigen Bereichs',
            page_out_from_end: 'Letzte Seite',
            page_out_from_begin: 'Erste Seite',
            page_range_info: '%{offsetBegin}-%{offsetEnd} von %{total}',
            partial_page_range_info:
                '%{offsetBegin}-%{offsetEnd} von mehr als %{offsetEnd}',
            current_page: 'Seite %{page}',
            page: 'Gehe zu Seite %{page}',
            first: 'Erste Seite',
            last: 'Letzte Seite',
            next: 'Vorwärts',
            previous: 'Zurück',
            page_rows_per_page: 'Zeilen pro Seite:',
            skip_nav: 'Zum Inhalt springen',
        },
        sort: {
            sort_by: 'Sortieren nach %{field_lower_first} %{order}',
            ASC: 'aufsteigend',
            DESC: 'absteigend',
        },
        auth: {
            auth_check_error: 'Bitte verbinde Dich um fortzufahren',
            user_menu: 'Profil',
            username: 'Benutzername',
            password: 'Passwort',
            sign_in: 'Anmelden',
            sign_in_error: 'Fehler bei der Anmeldung',
            logout: 'Abmelden',
        },
        notification: {
            updated: 'Element wurde aktualisiert |||| %{smart_count} Elemente wurden aktualisiert',
            created: 'Element wurde erstellt',
            deleted: 'Element wurde gelöscht |||| %{smart_count} Elemente wurden gelöscht',
            bad_item: 'Fehlerhaftes Element',
            item_doesnt_exist: 'Das Element existiert nicht',
            http_error: 'Fehler beim Kommunizieren mit dem Server',
            data_provider_error:
                'Fehler im dataProvider. Prüfe die Konsole für Details.',
            i18n_error:
                'Die Übersetzungen für die angegebene Sprache können nicht geladen werden.',
            canceled: 'Aktion abgebrochen',
            logged_out: 'Ihre Sitzung wurde beendet, bitte verbinden Sie sich neu.',
            not_authorized: "Du hast für diese Ressource keine Zugriffsrechte.",
            application_update_available: 'Eine neue Programmversion ist verfügbar...',
        },
        validation: {
            required: 'Benötigt',
            minLength: 'Muss mindestens %{min} Zeichen lang sein',
            maxLength: 'Darf maximal %{max} Zeichen lang sein',
            minValue: 'Muss mindestens %{min} sein',
            maxValue: 'Muss %{max} oder weniger sein',
            number: 'Bitte eine Nummer eingeben',
            email: 'Bitte eine gültige E-Mail eingeben',
            oneOf: 'Es muss einer sein von: %{options}',
            regex: 'Es muss folgendem regulären Ausdruck entsprechen: %{pattern}',
            unique: 'Wert muss einmalig sein',
        },
        saved_queries: {
            label: 'Abfrage speichern',
            query_name: 'Name der Abfrage',
            new_label: 'Abfrage speichern...',
            new_dialog_title: 'Abfrage speichern unter...',
            remove_label: 'Abfrage entfernen',
            remove_label_with_name: 'Abfrage "%{name}" entfernen',
            remove_dialog_title: 'Abfrage entfernen?',
            remove_message:
                'Bist Du sicher, dass Du den Eintrag aus der Liste entfernen möchten',
            help: 'Liste filtern und Abfrage speichern...',
        },
        configurable: {
            customize: 'Anpassen',
            configureMode: 'Seite anpassen',
            inspector: {
                title: 'Inspektor',
                content: 'Bewegen den Mauszeiger über die UI-Elemente der Anwendung, um diese zu konfigurieren',
                reset: 'Einstellungen zurücksetzen',
                hideAll: 'Alles ausblenden',
                showAll: 'Alles einblenden',
            },
            Datagrid: {
                title: 'Datengrid',
                unlabeled: 'Unbeschrifte Spalte #%{column}',
            },
            SimpleForm: {
                title: 'Formular',
                unlabeled: 'Unbeschriftete Eingabe #%{input}',
            },
            SimpleList: {
                title: 'List',
                primaryText: 'Erster Text',
                secondaryText: 'Zweiter Text',
                tertiaryText: 'Tertiär Text',
            },
        },
    },
};

export default swissgermanMessages;
