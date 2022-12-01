{{- define "chart.fullname" -}}
{{.Release.Name}}
{{- end -}}

{{- define "tradehack-ui.image-url" -}}
registry.gitlab.com/benalitique/tradehack/tradehack-ui{{ if ne (trunc 1 (.Values.imageTag | default "latest" | toString )) "@" }}:{{end}}{{ .Values.imageTag | default "latest" | toString }}
{{- end -}}

{{- define "imagePullSecret" }}
{{- printf "{\"auths\": {\"%s\": {\"auth\": \"%s\"}}}" (required "imageCredentials.registry must be defined" .Values.imageCredentials.registry) (printf "%s:%s" (required "imageCredentials.username must be defined" .Values.imageCredentials.username) (required "imageCredentials.password must be defined" .Values.imageCredentials.password) | b64enc) | b64enc }}
{{- end }}
