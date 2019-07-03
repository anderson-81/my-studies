require 'rexml/document'
include REXML

list = MyListener.new
xmlfile = File.new("pessoas.xml")
Document.parse_stream(xmlfile, list)